const txtInput = document.querySelector(".inputs input");
const btn = document.querySelector(".inputs button");
const infoTxt = document.querySelector(".info-txt");
let filteredTxt;

btn.addEventListener("click", () => {
  let reversedTxt = filteredTxt.split("").reverse().join("");
  infoTxt.style.display = "block";
  if (filteredTxt !== reversedTxt) {
    return (infoTxt.innerHTML = `No, <span> ${txtInput.value} </span> isn't a palindrome!`);
  }
  return (infoTxt.innerHTML = `Yes, <span> ${txtInput.value} </span> is a palindrome!`);
});

txtInput.addEventListener("keyup", () => {
  filteredTxt = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  if (filteredTxt) {
    return btn.classList.add("active");
  }
  infoTxt.style.display = "none";
  return btn.classList.remove("active");
});
