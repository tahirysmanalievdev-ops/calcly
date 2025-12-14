let display = document.getElementById("display");
let sci = false;

function add(val) {
  if (display.innerText === "0") display.innerText = val;
  else display.innerText += val;
}

function clearAll() {
  display.innerText = "0";
}

function del() {
  display.innerText =
    display.innerText.length > 1
      ? display.innerText.slice(0, -1)
      : "0";
}

function calc() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "0";
  }
}

function func(f, p) {
  let v = eval(display.innerText);
  display.innerText = p ? f + "(" + v + "," + p + ")" : f + "(" + v + ")";
  calc();
}

function toggleSci() {
  sci = !sci;
  document.querySelectorAll(".scientific").forEach(b => {
    b.style.display = sci ? "block" : "none";
  });
}

const SECRET_CODE = "676767";
let inputBuffer = "";

function add(val) {
  const display = document.getElementById("display");

  if (display.innerText === "0") display.innerText = val;
  else display.innerText += val;

  // secret listener (numbers only)
  if (!isNaN(val)) {
    inputBuffer += val;
    if (!SECRET_CODE.startsWith(inputBuffer)) {
      inputBuffer = val;
    }
    if (inputBuffer === SECRET_CODE) {
      window.open("secret.html", "_blank");
    }
  }
}

const CHRISTMAS_CODE = "2026";
let secretBuffer = "";

function add(val) {
  const display = document.getElementById("display");

  if (display.innerText === "0") display.innerText = val;
  else display.innerText += val;

  // secret code listener (numbers only)
  if (!isNaN(val)) {
    secretBuffer += val;

    if (!CHRISTMAS_CODE.startsWith(secretBuffer)) {
      secretBuffer = val;
    }

    if (secretBuffer === CHRISTMAS_CODE) {
      window.location.href = "christmas.html";
    }
  }
}

