

const form = document.querySelector(".content__form");
const containerEL = document.querySelector(".container");
const successEL = document.querySelector(".success_form");
const btn = document.querySelector(".btn--success");
console.log(successEL);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  containerEL.classList.add("hide");
  successEL.classList.remove("hide");
  form.childNodes[3].value = "";
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  containerEL.classList.remove("hide");
  successEL.classList.add("hide");
});


