import renderReview from "./renderReview";
import { makeButtonsGenericExcept } from "./helperFunctions";

export default function renderHome() {
  makeButtonsGenericExcept("#home-button");
  const currentMenuContent = document.querySelector(".current-menu-content");
  currentMenuContent.innerHTML = "";
  const introductionParagraph = document.createElement("p");
  introductionParagraph.textContent =
    "Introducing Surf and Turf Bistro, the newest dining destination for seafood and steak lovers alike. Our menu features a perfect blend of land and sea, with fresh caught fish and succulent cuts of meat expertly prepared by our experienced chefs. Our cozy and inviting atmosphere is the perfect setting for a romantic dinner or a night out with friends. Come visit us and experience the waves of flavor at Surf and Turf Bistro.";
  currentMenuContent.appendChild(introductionParagraph);

  const reviewsText = document.createElement("h2");
  reviewsText.textContent = "See what our customers say:";
  currentMenuContent.appendChild(reviewsText);

  const reviewContainer = document.createElement("div");
  reviewContainer.className = "review-container";

  const reviews = [
    {
      reviewText:
        "I had the pleasure of dining at Surf and Turf Bistro and it was an amazing experience. The seafood was some of the freshest I've ever had, and the steak was cooked to perfection. The atmosphere was cozy and intimate, making it the perfect spot for a date night. Highly recommend checking this place out!",
      reviewer: "Ashley from Dallas",
    },

    {
      reviewText:
        "If you're looking for a great seafood and steak spot, Surf and Turf Bistro is the place to go. The menu is extensive and has something for everyone. The service was top-notch and the staff were friendly and attentive. I especially liked the cozy and inviting atmosphere, it made for a great night out with friends.",
      reviewer: "Bradley from LA",
    },

    {
      reviewText:
        "I had heard great things about Surf and Turf Bistro and decided to give it a try. I was not disappointed. The food was delicious, and the menu had a great selection of seafood and steak options. The service was great and the atmosphere was cozy and comfortable. I highly recommend this place for a special occasion or a casual night out.",
      reviewer: "Antonio from Buffalo",
    },
  ];

  for (const review of reviews) {
    const reviewParagraph = renderReview(review);
    reviewContainer.appendChild(reviewParagraph);
  }

  currentMenuContent.appendChild(reviewContainer);
}
