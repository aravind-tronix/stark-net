import { roster, stats, stack, tracks } from "./data.js";

const el = (tag, cls, html) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html != null) node.innerHTML = html;
  return node;
};

export function renderStats(root) {
  root.replaceChildren(
    ...stats.map((s) => {
      const d = el("div", "stat");
      d.append(el("b", null, s.value), el("span", null, s.label));
      return d;
    })
  );
}

export function renderRoster(root) {
  root.replaceChildren(
    ...roster.map((u) => {
      const card = el("div", "unit");
      card.innerHTML = `
        <div class="status ${u.status}"><span class="dot"></span>${u.statusLabel}</div>
        <div class="code">${u.code}</div>
        <h3 class="serif">${u.name}</h3>
        <div class="role">${u.role}</div>
        <p>${u.blurb}</p>
        <div class="meta">${u.chips.map((c) => `<span class="chip">${c}</span>`).join("")}</div>`;
      return card;
    })
  );
}

export function renderTracks(root) {
  root.replaceChildren(
    ...tracks.map((t) => {
      const col = el("div", `track ${t.id}`);
      col.innerHTML = `
        <h4>${t.title}</h4>
        <div class="prov">${t.provider}</div>
        ${t.steps
          .map(
            (s) => `
          <div class="step ${s.state === "planned" ? "" : s.state}">
            <div class="st">${s.label}</div>
            <h5>${s.title}</h5>
            <p>${s.detail}</p>
          </div>`
          )
          .join("")}`;
      return col;
    })
  );
}

export function renderStack(root) {
  root.replaceChildren(
    ...stack.map((c) => {
      const cell = el("div", "cell");
      cell.innerHTML = `<div class="n">${c.n}</div><h6>${c.title}</h6><p>${c.detail}</p>`;
      return cell;
    })
  );
}
