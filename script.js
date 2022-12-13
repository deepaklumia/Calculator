const button = document.querySelectorAll('button');
let string = "";
Array.from(button).forEach((button) => {
  button.addEventListener('click', (e) => {
    
    if (e.target.innerText === "=") {
      let value = eval(string);
      document.querySelector('input').value = value;
    } else if (e.target.innerText === 'C') {
      string = "0";
      document.querySelector('input').value = string;
      string = '';
    } else if (e.target.innerText === '<') {
      string = string.slice(0, string.length - 1);
      document.querySelector('input').value = string;
    }
    else {
      string = string + e.target.innerText;
      document.querySelector('input').value = string;
    }
  })
});