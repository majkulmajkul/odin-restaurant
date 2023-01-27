import { makeButtonsGenericExcept } from "./helperFunctions";

export default function renderMenu() {
  makeButtonsGenericExcept("#menu-button");
  const currentMenuContent = document.querySelector(".current-menu-content");
  currentMenuContent.innerHTML = "";
  currentMenuContent.textContent = "Menu";
}

// "Pan-Seared Scallops with Lemon Butter Sauce" - This dish features plump and juicy scallops, seared to perfection and served with a tangy lemon butter sauce that adds a burst of flavor.

// "Grilled Lobster Tail with Garlic Herb Butter" - A succulent grilled lobster tail, served with a creamy garlic herb butter that melts in your mouth.

// "Filet Mignon with Red Wine Reduction" - A tender cut of filet mignon, grilled to your liking and served with a rich and flavorful red wine reduction sauce.

// "Surf and Turf Platter" - A combination of grilled steak and shrimp, served with a side of sautéed vegetables and a choice of potato.

// "Seafood Paella" - A traditional Spanish dish featuring a medley of seafood, including scallops, shrimp, and mussels, cooked with saffron-infused rice, peas, and bell peppers.
