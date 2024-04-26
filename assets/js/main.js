const header = document.querySelector("header");

header.addEventListener("mouseenter", function () {
  header.classList.add("visible");
});

header.addEventListener("mouseleave", function () {
  header.classList.remove("visible");
});

const burgerI = document.getElementById("burger");

burgerI.addEventListener("click", () => {
  const navigation = document.getElementById("nav");
  navigation.classList.toggle("active");
});

