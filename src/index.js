import "./style.css";

function renderHome() {
  const currentMenuContent = document.querySelector(".current-menu-content");
  currentMenuContent.innerHTML = "";
  currentMenuContent.textContent = "Home";
}

function renderMenu() {
  const currentMenuContent = document.querySelector(".current-menu-content");
  currentMenuContent.innerHTML = "";
  currentMenuContent.textContent = "Menu";
}

function renderContact() {
  const currentMenuContent = document.querySelector(".current-menu-content");
  currentMenuContent.innerHTML = "";
  currentMenuContent.textContent = "Contact";
}

function renderMainPage() {
  const pageContent = document.createElement("div");
  const welcomeText = document.createElement("h1");

  welcomeText.textContent = "Welcome to the Restaurant";
  welcomeText.classList.add("red");

  class navButton {
    constructor(name, text, onClick) {
      (this.name = name), (this.text = text), (this.onClick = onClick);
    }
  }

  const navButtons = [
    new navButton("home-", "Home", renderHome),
    new navButton("menu", "Menu", renderMenu),
    new navButton("contact", "Contact", renderContact),
  ];

  const buttonsContainer = document.createElement("div");

  for (const button of navButtons) {
    const thisButton = document.createElement("button");
    thisButton.textContent = button.text;
    thisButton.addEventListener("click", button.onClick);
    buttonsContainer.appendChild(thisButton);
  }

  const currentMenuContent = document.createElement("div");
  currentMenuContent.className = "current-menu-content";

  pageContent.appendChild(welcomeText);
  pageContent.appendChild(buttonsContainer);
  pageContent.appendChild(currentMenuContent);

  return pageContent;
}

document.body.appendChild(renderMainPage());
renderHome();
