import { makeButtonsGenericExcept } from "./helperFunctions";
import renderDish from "./renderDish";

export default function renderMenu() {
  makeButtonsGenericExcept("#menu-button");
  const dishes = [
    {
      name: "Pan-Seared Scallops with Lemon Butter Sauce",
      description:
        "This dish features plump and juicy scallops, seared to perfection and served with a tangy lemon butter sauce that adds a burst of flavor.",
      price: "$11.90",
    },
    {
      name: "Grilled Lobster Tail with Garlic Herb Butter",
      description:
        "A succulent grilled lobster tail, served with a creamy garlic herb butter that melts in your mouth.",
      price: "$18.90",
    },
    {
      name: "Filet Mignon with Red Wine Reduction",
      description:
        "A tender cut of filet mignon, grilled to your liking and served with a rich and flavorful red wine reduction sauce.",
      price: "$12.90",
    },
    {
      name: "Surf and Turf Platter",
      description:
        "A combination of grilled steak and shrimp, served with a side of sautéed vegetables and a choice of potato.",
      price: "$14.90",
    },
    {
      name: "Seafood Paella",
      description:
        "A traditional Spanish dish featuring a medley of seafood, including scallops, shrimp, and mussels, cooked with saffron-infused rice, peas, and bell peppers.",
      price: "$4.90",
    },
  ];

  const currentMenuContent = document.querySelector(".current-menu-content");
  currentMenuContent.innerHTML = "";
  const dishContainer = document.createElement("div");
  dishContainer.className = "dish-container";

  for (const dish of dishes) {
    const thisDish = renderDish(dish);
    dishContainer.appendChild(thisDish);
  }

  currentMenuContent.appendChild(dishContainer);
}
