const txtInput = document.querySelector('.inputs input'),
  checkBtn = document.querySelector('.inputs button'),
  infoTxt = document.querySelector('.info-text');
let filterInput;
checkBtn.addEventListener("click", () => {
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
  let reverseInput = filterInput.split("").reverse().join("");
  let text = document.querySelector('.inputs input').value;
  if (text === '') {
    return alert('Please input a value');
  }
  infoTxt.style.display = "block";
  if (filterInput != reverseInput) {
    return infoTxt.innerHTML = `No <span>'${txtInput.value}'</span> is not a palindrome`;
  }
  infoTxt.innerHTML = `Yes <span>'${txtInput.value}'</span> is a palindrome`;
});
txtInput.addEventListener("keyup", () => {
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
});
