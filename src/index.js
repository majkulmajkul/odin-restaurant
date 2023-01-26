console.log("It's working!");

function renderMainPage() {
  const welcomeText = document.createElement("h1");
  welcomeText.innerHTML = "Hello World";

  return welcomeText;
}

document.body.appendChild(renderMainPage());
