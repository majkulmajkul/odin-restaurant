export default function renderReview(reviewText) {
  const reviewParagraph = document.createElement("p");
  reviewParagraph.textContent = reviewText;
  reviewParagraph.className = "customer-review";
  return reviewParagraph;
}
