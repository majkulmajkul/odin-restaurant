function makeButtonsGenericExcept(except) {
  for (const id of ["#home-button", "#menu-button", "#contact-button"]) {
    if (id === except) {
      const thisButton = document.querySelector(id);
      thisButton.className = "selected";
    } else {
      const thisButton = document.querySelector(id);
      thisButton.className = "";
    }
  }
}

export { makeButtonsGenericExcept };
