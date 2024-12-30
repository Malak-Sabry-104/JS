const cards = [
  {
    name: "HTML 5",
    img: "./imgs/icon-1.png",
    p: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    name: "CSS 3",
    img: "./imgs/icon-2.png",
    p: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    name: "JAVASCRIPT",
    img: "./imgs/icon-3.png",
    p: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    name: "SASS",
    img: "./imgs/icon-4.png",
    p: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    name: "JQuery",
    img: "./imgs/icon-5.png",
    p: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    name: "React.js",
    img: "./imgs/icon-6.png",
    p: "Lorem ipsum dolor sit amet consectetur.",
  },
];

let row = document.querySelector(".row");
let name1 = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let form = document.querySelector("form");
let formGrade = document.querySelector(".form-grade");
let btn = document.querySelector("#go-up");
let card = document.querySelector("#card");
let grade = document.querySelector("#grade");
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let btnAdd = document.querySelector("#btn");
let addForm = document.querySelector("#add-form");
let p = document.querySelector(".p");

function addCards(card) {
  row.innerHTML += `

  <div class="col-md-4 col-sm-12">
        <div class="inner">
          <div class="card text-center d-flex flex-column justify-content-center align-items-center p-3 my-3">
            <img src="${card.img}" alt="" class="w-25 " >
            <h1>${card.name}</h1>
            <p>${card.p}</p>
          </div>
        </div>
      </div>
`;
}
cards.forEach(addCards);
let error1 = document.querySelector(".error1");
let error2 = document.querySelector(".error2");
let error3 = document.querySelector(".error3");
function validateForm(e) {
  e.preventDefault();
  if (name1.value == "" || email.value == "" || message.value == "") {
    error1.textContent = `all fields must filled out`;
  } else if (
    email.value.indexOf("@") === -1 ||
    email.value.indexOf(".") === -1
  ) {
    error2.textContent = `invalid email format`;

  } else if (message.value.length < 10) {
    error3.textContent = `write at least 10 char in message`;
  } else {
    window.location.reload();
  }
}
form.addEventListener("submit", validateForm);

btn.addEventListener("click", (e) => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", display);
function display(e) {
  if (document.documentElement.scrollTop < 250) {
    btn.style.display = "none";
  } else {
    btn.style.display = "block";
  }
}
let visits;
function checkVisits() {
  if (localStorage.getItem("visits") != null) {
    visits = parseInt(localStorage.getItem("visits")) + 1;
  } else {
    visits = 1;
  }
  localStorage.setItem("visits", visits);
  visits = localStorage.getItem("visits");
}
checkVisits();
card.innerHTML = `
    <p class="text-center p-3 mb-0 fw-semibold fs-5">Your visits is ${visits}</p>
`;

function checkGrade(e) {
  e.preventDefault();
  if (grade.value == "") {
    alert("please enter your grade");
  } else if (grade.value < 50) {
    alert("failed");
  } else if (grade.value <= 70) {
    alert("intermediate");
  } else if (grade.value <= 80) {
    alert(" over intermediate");
  } else if (grade.value <= 100) {
    alert(" very good");
  } else {
    alert("invalid value");
  }
}
formGrade.addEventListener("submit", checkGrade);

let result;
btnAdd.addEventListener("click", (e) => {
  result = Number(num1.value) + Number(num2.value);
  p.textContent = `the result is ${result}`;
});

let birthDay = document.querySelector("#date");
let birthMonth = document.querySelector("#month");
let birthYear = document.querySelector("#year");
let ageBtn = document.querySelector(".age-btn");
let messageAge = document.querySelector(".sec-4 p");
let formAge = document.querySelector(".form-age ");
const currentDate = new Date(); // That is oop fyi
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

ageBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let resultDay = currentDay - birthDay.value;
  let resultMonth = currentMonth - birthMonth.value;
  let resultYear = currentYear - birthYear.value;
  messageAge.textContent = `your age is ${resultYear} years and  ${resultMonth} months and ${resultDay} days .`;
});
