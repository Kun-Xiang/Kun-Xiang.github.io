import { createHomeZoom } from "./vendor/orocoa/home/zoom.js";
import {
  pointcloudReady,
  setPointcloudVisible,
  setPointcloudPaused,
} from "./vendor/orocoa/home/pointcloud.js";
import { greetingReady } from "./vendor/orocoa/home/greeting.js";
import { pageScroll } from "./vendor/orocoa/assets/page-scroll.js";

// Academic adaptation of the reference's scroll clock. Its ink-zoom and live
// point-cloud frame capture remain in the original modules. The destination is
// About, whose reading height can exceed the viewport on a phone.
const journey = document.querySelector("#journey");
const viewport = document.querySelector(".journey-viewport");
const home = document.querySelector(".homepage");
const about = document.querySelector("#about");
const header = document.querySelector("#site-header");
const reduced = matchMedia("(prefers-reduced-motion: reduce)");
const zoom = createHomeZoom(home);
const clamp = (value) => Math.min(1, Math.max(0, value));
const smooth = (value) => {
  const p = clamp(value);
  return p * p * (3 - 2 * p);
};
let metrics,
  scheduled = 0,
  prepared = false;

function measure() {
  const height = viewport.clientHeight;
  const travel = Math.round(height * (innerWidth <= 700 ? 0.85 : 1.2));
  const extra = Math.max(0, about.scrollHeight - height);
  const hold = Math.round(height * 0.12);
  metrics = { height, travel, extra, end: travel + extra + hold };
  journey.style.height = `${height + metrics.end}px`;
  zoom.invalidate();
  if (prepared) zoom.prepare();
  pageScroll.refresh();
  render();
}

export function updateChapter() {
  if (!metrics) return;
  const progress = scrollY / metrics.travel;
  const visible = progress >= 0.98;
  header.classList.toggle("is-visible", visible);
  header.inert = !visible;
  let active = "about";
  for (const id of ["updates", "research", "publications", "contact"]) {
    if (document.getElementById(id).getBoundingClientRect().top <= 110)
      active = id;
  }
  if (visible && scrollY + innerHeight >= document.documentElement.scrollHeight - 4)
    active = "contact";
  document.querySelectorAll(".main-nav a").forEach((link) => {
    if (link.hash === `#${active}`)
      link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

function render() {
  if (!metrics) return;
  scheduled = 0;
  const progress = clamp(scrollY / metrics.travel);
  const zoomVisible = zoom.render(progress * 0.84, reduced.matches);
  const fallback = reduced.matches || !prepared;
  home.style.opacity = fallback ? 1 - smooth(progress) : progress === 0 ? 1 : 0;
  home.inert = progress > 0.002;
  // The last portion of the original zoom is solid white. Its short fade
  // reveals the white destination, preserving one uninterrupted transition.
  const entry = fallback ? smooth(progress) : smooth((progress - 0.86) / 0.14);
  about.style.opacity = entry;
  const readingOffset = Math.min(
    metrics.extra,
    Math.max(0, scrollY - metrics.travel),
  );
  about.style.transform = `translate3d(0,${(1 - entry) * 22 - readingOffset}px,0)`;
  about.inert = entry < 0.999 || scrollY > metrics.end + metrics.height;
  setPointcloudVisible(zoomVisible || progress < 0.002);
  document.documentElement.dataset.chapter =
    progress === 0 ? "home" : progress < 1 ? "opening-transition" : "reading";
  updateChapter();
}

function requestRender() {
  if (!scheduled) scheduled = requestAnimationFrame(render);
}
export function navigate(id, { immediate = false } = {}) {
  if (!metrics) return;
  const target = document.getElementById(id);
  if (!target) return;
  const y =
    id === "home"
      ? 0
      : id === "about"
        ? metrics.travel
        : target.getBoundingClientRect().top + scrollY - 78;
  pageScroll.to(y, { immediate, duration: 0.95 });
}

addEventListener("journey:scroll", requestRender);
addEventListener("scroll", requestRender, { passive: true });
addEventListener("resize", measure, { passive: true });
new ResizeObserver(measure).observe(about);
reduced.addEventListener("change", () => {
  zoom.invalidate();
  requestRender();
});
measure();

const motionButton = document.querySelector("#motion-toggle");
let paused = reduced.matches;
function syncMotion() {
  setPointcloudPaused(paused);
  motionButton.setAttribute("aria-pressed", String(paused));
  motionButton.setAttribute(
    "aria-label",
    paused ? "Play point cloud animation" : "Pause point cloud animation",
  );
  motionButton.firstElementChild.textContent = paused ? "▷" : "Ⅱ";
}
motionButton.addEventListener("click", () => {
  paused = !paused;
  syncMotion();
});
reduced.addEventListener("change", (event) => {
  paused = event.matches;
  syncMotion();
});
syncMotion();

export const ready = Promise.all([
  greetingReady,
  pointcloudReady.catch(() => null),
]).then(() => {
  prepared = true;
  zoom.prepare();
  measure();
});
