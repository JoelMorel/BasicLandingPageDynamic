// DOM Elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

// Show Time
function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let mins = today.getMinutes();
  let seconds = today.getSeconds();

  const amPM = hour >= 12 ? "PM" : "AM"; // Set AM/PM

  // Format to 12-hour clock
  hour = hour % 12 || 12;

  // Output time
  time.innerHTML = `${hour}<span>:</span>${formatTime(
    mins
  )}<span>:</span>${formatTime(seconds)} ${amPM}`;

  setTimeout(showTime, 1000);
}

function formatTime(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function setBackgroundGreeting() {
  let date = new Date();
  let hour = date.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
  } else {
    document.body.style.backgroundImage = "url('../img/evening.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "_____";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

function setName(event) {
  if (event.type === "keypress") {
    if (event.which == 13 || event.keyCode == 13) {
      localStorage.setItem("name", event.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", event.target.innerText);
  }
}

function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "_________";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

function setFocus(event) {
  if (event.type === "keypress") {
    if (event.which == 13 || event.keyCode == 13) {
      localStorage.setItem("focus", event.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", event.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

showTime();
setBackgroundGreeting();
getName();
getFocus();
