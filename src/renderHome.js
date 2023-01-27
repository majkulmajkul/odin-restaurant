export default function renderHome() {
  const currentMenuContent = document.querySelector(".current-menu-content");
  currentMenuContent.innerHTML = "";
  currentMenuContent.textContent = "Home";
}
