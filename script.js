// Feature 1-a

// const clickFooter = document.getElementsByTagName("footer")[0];
// clickFooter.addEventListener("click", function () {
//   console.log("click");
// });

// Feature 1-b

let count = 0;
const clickFooter = document.getElementsByTagName("footer")[0];
clickFooter.addEventListener("click", function () {
  count++;
  console.log(`clic numéro ${count}`);
});

// Feature 2
let menu = document.querySelector("#navbarHeader");
let menuBtn = document.querySelector(".navbar-toggler");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("collapse");
});

// Feature 3
let firstCard = document.querySelectorAll(".card")[0];
let firstEditBtn = document.querySelectorAll(".btn-outline-secondary")[0];
firstEditBtn.addEventListener("click", function () {
  firstCard.style = "color:red";
});

// Feature 4
let secondCard = document.querySelectorAll(".card")[1];
let secondEditBtn = document.querySelectorAll(".btn-outline-secondary")[1];
secondEditBtn.addEventListener("click", function () {
  if (secondCard.style.color == "green") {
    secondCard.style.color = "";
  } else {
    secondCard.style.color = "green";
  }
});

// Feature 5
let navbar = document.querySelector(".navbar");
navbar.addEventListener("dblclick", function () {
  document.head.children[2].toggleAttribute("disabled");
});

// Feature 6
let viewBtns = document.querySelectorAll(".btn-success");
for (let i = 0; i < viewBtns.length; i++) {
  viewBtns[i].addEventListener("mouseenter", function () {
    let cardImage = document.querySelectorAll(".card-img-top")[i];
    let cardText = document.querySelectorAll(".card-text")[i];

    cardText.toggleAttribute("hidden");
    if (cardImage.style.width === "20%") {
      cardImage.style.width = "100%";
    } else {
      cardImage.style.width = "20%";
    }
  });
}
