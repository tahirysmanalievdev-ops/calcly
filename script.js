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