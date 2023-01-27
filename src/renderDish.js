export default function renderDish(dishObject) {
  const dishCard = document.createElement("div");
  dishCard.className = "dish-card";

  const dishCardTitle = document.createElement("h3");
  dishCardTitle.textContent = dishObject.name;

  const dishCardText = document.createElement("p");
  dishCardText.textContent = dishObject.description;

  const dishCardPrice = document.createElement("h4");
  dishCardPrice.textContent = dishObject.price;

  dishCard.appendChild(dishCardTitle);
  dishCard.appendChild(dishCardText);
  dishCard.appendChild(dishCardPrice);

  return dishCard;
}
