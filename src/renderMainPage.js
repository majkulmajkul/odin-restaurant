import renderHome from "./renderHome";
import renderMenu from "./renderMenu";
import renderContact from "./renderContact";

export default function renderMainPage() {
  const pageContent = document.createElement("div");
  const welcomeText = document.createElement("h1");

  welcomeText.innerHTML =
    "<span class='squid-logo'>くコ:彡</span><br/>Surf and Turf Bistro";

  class navButton {
    constructor(name, text, onClick) {
      (this.name = name), (this.text = text), (this.onClick = onClick);
    }
  }

  const navButtons = [
    new navButton("home-button", "Home", renderHome),
    new navButton("menu-button", "Menu", renderMenu),
    new navButton("contact-button", "Contact", renderContact),
  ];

  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "buttons-conatiner";

  for (const button of navButtons) {
    const thisButton = document.createElement("button");
    thisButton.textContent = button.text;
    thisButton.id = button.name;
    thisButton.addEventListener("click", button.onClick);
    buttonsContainer.appendChild(thisButton);
  }

  const currentMenuContent = document.createElement("div");
  currentMenuContent.className = "current-menu-content";

  const footer = document.createElement("footer");
  footer.textContent = "© majkulmajkul - Surf & Turf 2023";

  pageContent.appendChild(welcomeText);
  pageContent.appendChild(buttonsContainer);
  pageContent.appendChild(currentMenuContent);
  document.querySelector("body").appendChild(footer);

  return pageContent;
}
