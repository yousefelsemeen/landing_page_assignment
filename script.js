const mediaQuery = window.matchMedia("(max-width: 768px)");

if (mediaQuery.matches) {
  let hamburger = document.querySelector("header nav");
  let ulMenu = document.querySelector("header nav ul");
  ulMenu.style.display = "none";
  hamburger.addEventListener("click", handleMenu);
} else {
  let ulMenu = document.querySelector("header nav ul");
  ulMenu.style.display = "flex";
}

mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    let hamburger = document.querySelector("header nav");
    let ulMenu = document.querySelector("header nav ul");
    ulMenu.style.display = "none";
    hamburger.addEventListener("click", handleMenu);
  } else {
    let ulMenu = document.querySelector("header nav ul");
    ulMenu.style.display = "flex";
  }
});

function handleMenu() {
  let ulMenu = document.querySelector("header nav ul");
  if (ulMenu.style.display === "none" || ulMenu.style.display === "") {
    ulMenu.style.display = "flex";
  } else {
    ulMenu.style.display = "none";
  }
}
