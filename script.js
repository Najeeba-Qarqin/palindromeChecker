const txtInput = document.querySelector('.inputs input'),
  checkBtn = document.querySelector('.inputs button'),
  infoTxt = document.querySelector('.info-text');
let filterInput;
checkBtn.addEventListener("click", () => {
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
  let reverseInput = filterInput.split("").reverse().join("");
  let text = document.querySelector('.inputs input').value;
});
