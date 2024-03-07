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

// control slider
const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener("click", () => {
    wrapper.style.transform = `translateX(-${index * 100}vw)`;
    const selectedItem = document.querySelector(".selectedItem");
    selectedItem.classList.remove("selectedItem");
    menuItem.classList.add("selectedItem");
  });
});
