import { makeButtonsGenericExcept } from "./helperFunctions";

export default function renderContact() {
  makeButtonsGenericExcept("#contact-button");

  const currentMenuContent = document.querySelector(".current-menu-content");

  currentMenuContent.innerHTML = "";
}

// "123 Oceanfront Avenue, Seaside City, Coastal County, 12345"
// Phone number: 555-555-5555
// Email: info@surfandturfbistro.com
