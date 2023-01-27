export default function renderHome() {
  const currentMenuContent = document.querySelector(".current-menu-content");
  currentMenuContent.innerHTML = "";
  const introductionParagraph = document.createElement("p");
  introductionParagraph.textContent =
    "Introducing Surf and Turf Bistro, the newest dining destination for seafood and steak lovers alike. Our menu features a perfect blend of land and sea, with fresh caught fish and succulent cuts of meat expertly prepared by our experienced chefs. Our cozy and inviting atmosphere is the perfect setting for a romantic dinner or a night out with friends. Come visit us and experience the waves of flavor at Surf and Turf Bistro.";
  currentMenuContent.appendChild(introductionParagraph);
}
