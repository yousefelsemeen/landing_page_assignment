const products = [
  {
    id: 1,
    name: "Adidas Yeezy Boost 350 V2",
    price: 220,
    image: "./imgs/hippie.png",
  },
  {
    id: 2,
    name: "Nike Air Max 1 'Evergreen Aura'",
    price: 140,
    image: "./imgs/air2.png",
  },
  {
    id: 3,
    name: "Jordan 1 Retro High Dark Mocha",
    price: 170,
    image: "./imgs/jordan.png",
  },
  {
    id: 4,
    name: "Nike Dunk Low SP Champ Colors",
    price: 100,
    image: "./imgs/crater2.png",
  },
  {
    id: 5,
    name: "Adidas Boost 700 V3 Srphym",
    price: 200,
    image: "./imgs/hippie.png",
  },
  {
    id: 6,
    name: "Skechers D'Lites 3.0",
    price: 70,
    image: "./imgs/air.png",
  },
];

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
