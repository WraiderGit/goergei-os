// Tray Zeit
function updateTrayTime() {
  const el = document.getElementById("tray-time");
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleTimeString();
}
setInterval(updateTrayTime, 1000);
updateTrayTime();

// Command Palette öffnen (Ctrl+K)
document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key.toLowerCase() === "k") {
    e.preventDefault();
    const palette = document.getElementById("cmd-palette");
    const input = document.getElementById("cmd-input");
    if (!palette || !input) return;
    palette.style.display = "block";
    input.value = "";
    input.focus();
  }
});

// Command Palette schließen bei Klick außerhalb
document.addEventListener("click", e => {
  const palette = document.getElementById("cmd-palette");
  if (!palette) return;
  if (e.target.closest(".command-palette")) return;
  palette.style.display = "none";
});

// Command Palette Aktionen
document.addEventListener("click", e => {
  const item = e.target.closest(".command-list div");
  if (!item) return;
  const action = item.dataset.action;
  if (action === "open-dashboard") window.location.href = "index.html";
  if (action === "open-network") window.location.href = "network.html";
  if (action === "open-scanner") window.location.href = "scanner.html";
  if (action === "open-logs") window.location.href = "logs.html";
});
