// Commment

const submitBtn = document.querySelector(".submit__button");
// console.log(submitBtn);
submitBtn.addEventListener("click", function () {
  const input = document.querySelector(".input__text").value;
  const messageList = document.querySelector(".message__list");

  const listItem = document.createElement("li");
  listItem.textContent = input;

  messageList.appendChild(listItem);

  document.querySelector(".input__text").value = "";
});

// Donate

const donateBtn = document.querySelectorAll(".donate__button");

let totalMoney = 2337;

for (let i = 0; i < donateBtn.length; i++) {
  donateBtn[i].addEventListener("click", function () {
    let value = parseFloat(this.getAttribute("data-value"));

    totalMoney += value;

    let newTotalMoney = document.querySelector(".donate__value");
    newTotalMoney.textContent = totalMoney;
  });
}

const customBtn = document.querySelector(".donate__button--custom");
customBtn.addEventListener("click", function () {
  let customInput = document.querySelector(".donate__button--input");
  let value = parseFloat(customInput.value);

  if (!isNaN(value) && value > 10) {
    totalMoney += value;
    document.querySelector(".donate__value").textContent = totalMoney;
    customInput.value = "";
  } else if (value < 10) alert("The minimum donation amount is $10");
});

// UserName

let name = prompt("Please enter your name : ");
let regex = /^[a-zA-Z]+$/;

if (name.match(regex)) {
  alert("Welcome" + " " + name + "!");
} else {
  alert("Invalid name!!!");
}
