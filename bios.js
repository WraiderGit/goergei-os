const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

let currentTab = 0;

function showTab(index) {
  tabs.forEach(t => t.classList.remove("active"));
  contents.forEach(c => c.style.display = "none");

  tabs[index].classList.add("active");
  contents[index].style.display = "block";

  currentTab = index;
}

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => showTab(i));
});

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") {
    showTab((currentTab + 1) % tabs.length);
  }

  if (e.key === "ArrowLeft") {
    showTab((currentTab - 1 + tabs.length) % tabs.length);
  }

  if (e.key === "Escape") {
    window.location.href = "boot.html";
  }

  if (e.key === "Enter") {
    if (currentTab === 3) {
      window.location.href = "boot.html";
    }
  }
});
