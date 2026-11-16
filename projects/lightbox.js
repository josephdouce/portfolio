// Click a screenshot to see it full size; click or press Esc to close.
(() => {
  const box = document.createElement("div");
  box.className = "lightbox"; box.innerHTML = '<img alt="">';
  document.body.appendChild(box);
  const img = box.querySelector("img");
  const close = () => box.classList.remove("open");
  document.querySelectorAll("figure button").forEach((b) => b.addEventListener("click", () => {
    const i = b.querySelector("img"); img.src = i.src; img.alt = i.alt; box.classList.add("open");
  }));
  box.addEventListener("click", close);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
})();
