export default function renderReview(reviewObject) {
  const reviewCard = document.createElement("div");
  reviewCard.className = "customer-review";

  const reviewParagraph = document.createElement("p");
  reviewParagraph.textContent = reviewObject.reviewText;

  const reviewerName = document.createElement("h6");
  reviewerName.textContent = reviewObject.reviewer;
  reviewerName.className = "reviewer-name";

  reviewCard.appendChild(reviewParagraph);
  reviewCard.appendChild(reviewerName);

  return reviewCard;
}
