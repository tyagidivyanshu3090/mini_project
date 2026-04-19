// index.js

function highlightText() {
  // Use querySelectorAll so we get a NodeList (supports .forEach directly)
  // Selector 'p.info' = all <p> tags that have the class "info"
  const elements = document.querySelectorAll("p.info");

  elements.forEach((element) => {
    // Every HTML element has a built-in .style object
    // .style gives you access to ALL CSS properties as JS camelCase properties
    // background-color in CSS → backgroundColor in JS
    element.style.backgroundColor = "yellow";
  });
}
