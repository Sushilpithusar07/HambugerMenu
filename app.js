let barIcon = document.querySelector(".bar");
let main = document.querySelector(".main");
let cross = document.querySelector(".cross");



barIcon.addEventListener("click", function () {
  main.classList.remove("visible");
  cross.classList.remove("none");
})


cross.addEventListener("click", function () {
  main.classList.add("visible");
  cross.classList.add("none");
})