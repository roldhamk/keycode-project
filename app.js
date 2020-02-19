// function keycode() {
//   let key = event.keyCode;
//   console.log(key);
// }

const body = document.querySelector("body");
const which = document.getElementById("which");
const code = document.getElementById("code");
const display = document.getElementById("display");

body.addEventListener("keydown", event => {
  which.textContent = event.which;
  display.textContent = event.which;
});

body.addEventListener("keydown", event => {
  code.textContent = event.code;
});

body.addEventListener("keydown", event => {
  key.textContent = event.key;
});
