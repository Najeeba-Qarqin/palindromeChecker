# palindromeChecker 🚀

## Project Description 📝

> Palindrome checker project created in HTML, CSS and javaScript it can check vlaue enterd in input box is a palindrome or not.

Examples:

- It can check vlaue enterd in input box is a palindrome or not
- From this project i learned how to use javaScript in projects and some events of javaScript.
- The style and accessibility of this project make's it stand out.

### HTML:
```html

  <div class="wrapper">
    <header>
      <h1>Palindrome Checker</h1>
      <p class="font">A palindrome is a word or phrace that roads the same backwards as forwards .e.g level, refer.</p>
    </header>
    <div class="inputs">
      <input type="text" id="text-input" class="font" placeholder="Enter a palindrome:">
      <button class="font" id="check-btn">Check Palindrome</button>
      <div id="result" class="info-text font"></div>
    </div>
  </div>

```
### CSS:
```css

.wrapper {
  max-width: 300px;
  backdrop-filter: blur(5px);
  border-radius: 7px;
  padding: 20px 25px 15px;
  margin: 6vw;
  box-shadow: 0 0 20px gray;
}

header h1 {
  font-size: 18px;
  font-weight: 600;
  color: white;
}

header p {
  margin-top: 5px;
  font-size: 11px;
  color: gray;
}

```
### JS:
```javascript

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

```

## Demo 📸

![Demo](/Annotation%202024-06-21%20151053.png)

## Technologies Used 🛠️

- HTML
- CSS
- JavaScript

## Features ⭐

- Building palindrome checker.

## Author 👩‍💻


- LinkedIn: [najeeba-qarqin](https://www.linkedin.com/in/najeeba-qarqin-5419502ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
- Email: [najeebaqarqin](najeebaqarqin@gmail.com)
- GitHub: [Najeeba_Qarqin](https://github.com/Najeeba-Qarqin)
