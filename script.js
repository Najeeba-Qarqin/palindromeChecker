const txtInput = document.querySelector('.inputs input');
const checkBtn = document.querySelector('.inputs button');
const infoTxt = document.querySelector('.info-text');
let filterInput;
checkBtn.addEventListener('click', () => {
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, '');
  const reverseInput = filterInput.split('').reverse().join('');
  const text = document.querySelector('.inputs input').value;
  if (text === '') {
    return window.alert('Please input a value');
  }
  infoTxt.style.display = 'block';
  if (filterInput !== reverseInput) {
    infoTxt.innerHTML = `No <span>'${txtInput.value}'</span> is not a palindrome`;
  } else {
    infoTxt.innerHTML = `Yes <span>'${txtInput.value}'</span> is a palindrome`;
  }
  return infoTxt;
});
txtInput.addEventListener('keyup', () => {
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, '');
  if (filterInput) {
    return checkBtn.classList.add('active');
  }
  infoTxt.style.display = 'none';
  return checkBtn.classList.remove('active');
});
