import { renderRoster, renderStack, renderStats, renderTracks } from "./render.js";

function boot() {
  renderStats(document.querySelector("#stats-grid"));
  renderRoster(document.querySelector("#roster-grid"));
  renderTracks(document.querySelector("#tracks-grid"));
  renderStack(document.querySelector("#stack-grid"));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
