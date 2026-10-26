import { publications } from "./data.js?v=20261026-bee-flow";
import { researchDetails } from "./research.js?v=20261026-authors";
import { pageScroll } from "./vendor/orocoa/assets/page-scroll.js";
import { ready, navigate, updateChapter } from "./journey.js?v=20261026-contact-simple";
import "./vendor/orocoa/fields/fields.js";
const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => [...document.querySelectorAll(selector)];
let activeFilter = "all";
const escapeHTML = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ],
  );
const contributionLabel = (paper) =>
  paper.contribution?.kind === "core" ? "Core contributors" : "Equal contribution";
const formatAuthors = (paper) => {
  const names = paper.authors.map((name) => {
    const text = name === "Kun Xiang"
      ? `<strong>${escapeHTML(name)}</strong>`
      : escapeHTML(name);
    const marked = paper.contribution?.authors.includes(name);
    return text + (marked
      ? `<sup title="${contributionLabel(paper)}" aria-label="${contributionLabel(paper)}">*</sup>`
      : "");
  });
  return names.slice(0, -1).join(", ") + ", and " + names.at(-1);
};
const contributionNote = (paper) => paper.contribution
  ? `<p class="author-note">* ${contributionLabel(paper)}.</p>`
  : "";
const linksHTML = (links) =>
  links
    .map(
      ([label, url]) =>
        `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} <span aria-hidden="true">↗</span></a>`,
    )
    .join("");

const list = select("#publication-list");
select(".filter-count").textContent = String(publications.length).padStart(
  2,
  "0",
);
for (const paper of publications) {
  const article = document.createElement("article");
  article.className = "publication";
  article.dataset.id = paper.id;
  article.innerHTML = `<span class="pub-year">${paper.year}</span><div class="pub-info"><h3 class="pub-title"><a href="${escapeHTML(paper.links[0][1])}" target="_blank" rel="noopener noreferrer">${escapeHTML(paper.title)}</a></h3><p class="pub-summary">${escapeHTML(paper.summary)}</p><p class="pub-authors">${formatAuthors(paper)}</p>${contributionNote(paper)}<div class="pub-links">${linksHTML(paper.links)}</div></div><span class="pub-venue">${escapeHTML(paper.venue)}</span>`;
  list.append(article);
}
function filterPublications() {
  const query = select("#publication-search").value.trim().toLowerCase();
  let count = 0;
  for (const [index, article] of [...list.children].entries()) {
    const paper = publications[index];
    const matches =
      (activeFilter === "all" || paper.type === activeFilter) &&
      `${paper.title} ${paper.authors.join(", ")} ${paper.venue} ${paper.year} ${paper.summary}`
        .toLowerCase()
        .includes(query);
    article.hidden = !matches;
    if (matches) count++;
  }
  select("#publication-empty").hidden = count > 0;
  select("#publication-status").textContent =
    `${count} publication${count === 1 ? "" : "s"} shown.`;
}
selectAll("[data-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    selectAll("[data-filter]").forEach((item) =>
      item.setAttribute("aria-pressed", String(item === button)),
    );
    filterPublications();
  }),
);
select("#publication-search").addEventListener("input", filterPublications);
filterPublications();

const dialog = select("#project-dialog");
let previousFocus = null;
function renderProject(id) {
  const paper = publications.find((item) => item.id === id);
  const detail = researchDetails[id];
  const imageURL = new URL(paper.image, import.meta.url).href;
  const stats = detail.stats
    .map(
      (stat) =>
        `<div><dt>${escapeHTML(stat.label)}</dt><dd>${escapeHTML(stat.value)}</dd></div>`,
    )
    .join("");
  const highlights = detail.highlights
    .map(
      (item) =>
        `<li><h4>${escapeHTML(item.title)}</h4><p>${escapeHTML(item.text)}</p></li>`,
    )
    .join("");
  const sources = detail.sources
    .map(
      (source) =>
        `<a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.label)} <span aria-hidden="true">↗</span></a>`,
    )
    .join("");
  select("#dialog-content").innerHTML = `
    <p class="dialog-venue">${escapeHTML(paper.name)} · ${escapeHTML(paper.venue)}</p>
    <h2 id="dialog-title" class="dialog-headline">${escapeHTML(detail.headline)}</h2>
    <p class="dialog-deck">${escapeHTML(detail.deck)}</p>
    <div class="dialog-links">${linksHTML(paper.links)}</div>
    <dl class="dialog-stats" aria-label="Research at a glance">${stats}</dl>
    <section class="dialog-overview" aria-labelledby="dialog-overview-title"><h3 id="dialog-overview-title">Why it matters</h3><p>${escapeHTML(detail.overview[0])}</p></section>
    <section class="dialog-contributions" aria-labelledby="dialog-contributions-title"><h3 id="dialog-contributions-title">Three things to know</h3><ul class="dialog-highlights">${highlights}</ul></section>
    <figure class="dialog-figure"><a href="${escapeHTML(imageURL)}" target="_blank" rel="noopener noreferrer" aria-label="Open original research figure"><img src="${escapeHTML(imageURL)}" alt="${escapeHTML(paper.name)} original research figure"></a><figcaption>${escapeHTML(detail.figureCaption)} Click to view the full-size figure.</figcaption></figure>
    <section class="dialog-overview dialog-inside" aria-labelledby="dialog-inside-title"><h3 id="dialog-inside-title">Inside the work</h3><p>${escapeHTML(detail.overview[1])}</p></section>
    <div class="dialog-sources"><h3>Paper & collaborators</h3><h4 class="dialog-paper-title">${escapeHTML(paper.title)}</h4><p class="dialog-authors">${formatAuthors(paper)}</p>${contributionNote(paper)}${sources}</div>`;
}
selectAll("[data-project]").forEach((button) =>
  button.addEventListener("click", (event) => {
    event.preventDefault();
    pageScroll.stop();
    previousFocus = button;
    renderProject(button.dataset.project);
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add("dialog-open");
    select(".dialog-close").focus();
  }),
);
select(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  if (
    event.target === dialog &&
    (event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom)
  )
    dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  pageScroll.start();
  previousFocus?.focus({ preventScroll: true });
});

const newsButton = select(".news-toggle");
newsButton.addEventListener("click", () => {
  const expanded = newsButton.getAttribute("aria-expanded") !== "true";
  newsButton.setAttribute("aria-expanded", String(expanded));
  select("#older-news").hidden = !expanded;
  newsButton.firstElementChild.textContent = expanded
    ? "Fewer updates"
    : "Earlier updates";
  newsButton.lastElementChild.textContent = expanded ? "−" : "＋";
});

let copyTimer;
select("#copy-email").addEventListener("click", async () => {
  clearTimeout(copyTimer);
  try {
    const email = select(".email-line > a").textContent.trim();
    await navigator.clipboard.writeText(email);
    select("#copy-feedback").textContent = "Email copied.";
  } catch {
    const range = document.createRange();
    range.selectNodeContents(select(".email-line>a"));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    select("#copy-feedback").textContent =
      "Email selected. Press ⌘C / Ctrl+C to copy.";
  }
  copyTimer = setTimeout(() => {
    select("#copy-feedback").textContent = "";
  }, 5000);
});
select("#copyright-year").textContent = new Date().getFullYear();

const menuButton = select(".menu-toggle");
function closeNavigation() {
  select("#site-header").classList.remove("nav-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
}
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  select("#site-header").classList.toggle("nav-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
});
selectAll('a[href^="#"]').forEach((link) =>
  link.addEventListener("click", (event) => {
    if (link.hasAttribute("data-project")) return;
    const id = link.hash.slice(1);
    if (!document.getElementById(id)) return;
    event.preventDefault();
    closeNavigation();
    history.pushState(null, "", link.hash);
    navigate(id);
  }),
);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});
document.addEventListener("click", (event) => {
  if (!select("#site-header").contains(event.target)) closeNavigation();
});
addEventListener("popstate", () => navigate(location.hash.slice(1) || "home"));
addEventListener("hashchange", () =>
  navigate(location.hash.slice(1) || "home"),
);
ready.then(() => {
  navigate(location.hash.slice(1) || "home", { immediate: true });
  updateChapter();
});
