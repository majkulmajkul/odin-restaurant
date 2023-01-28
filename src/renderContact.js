import { makeButtonsGenericExcept } from "./helperFunctions";

export default function renderContact() {
  makeButtonsGenericExcept("#contact-button");

  const currentMenuContent = document.querySelector(".current-menu-content");

  currentMenuContent.innerHTML = "";

  const contactContainer = document.createElement("div");
  contactContainer.className = "contact-container";

  const address = document.createElement("h3");
  address.textContent =
    "23 Oceanfront Avenue, Seaside City, Coastal County, 12345";

  const phone = document.createElement("h4");
  phone.textContent = "Phone number: 555-555-5555";

  const email = document.createElement("p");
  email.textContent = "Email: info@surfandturfbistro.com";

  contactContainer.appendChild(address, phone, email);
  contactContainer.appendChild(phone);
  contactContainer.appendChild(email);
  currentMenuContent.appendChild(contactContainer);
}

// "123 Oceanfront Avenue, Seaside City, Coastal County, 12345"
// Phone number: 555-555-5555
// Email: info@surfandturfbistro.com
