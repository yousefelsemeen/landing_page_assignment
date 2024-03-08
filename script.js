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

const searchBar = document.getElementById("search-bar");
const resultsList = document.getElementById("results");

searchBar.addEventListener("keyup", (e) => {
  const searchTerm = searchBar.value.toLowerCase();
  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm));

  if (searchTerm === "") {
    resultsList.style.display = "none";
  } else {
    if (filteredProducts.length > 0) {
      resultsList.innerHTML = "";

      filteredProducts.forEach((product) => {
        const item = document.createElement("li");
        item.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <p>${product.name}</p>
        <p>$${product.price}</p>
        `;
        resultsList.appendChild(item);
      });
    } else {
      resultsList.innerHTML = "<li>No products found</li>";
    }
    resultsList.style.display = "block";
  }
});

document.addEventListener("click", (e) => {
  if (e.target !== searchBar) {
    resultsList.style.display = "none";
  }
});

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
