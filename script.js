const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const sunIcon = "assets/SunIcon.svg";
const moonIcon = "assets/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const ans = document.getElementById("answer");
const toast = document.getElementById("toast");

function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    ans.value = "Can't divide 0 with 0";
    setTimeout(() => {
      ans.value = "";
    }, 1300);
  } else {
    ans.value = calculatedValue;
  }
}

// Swaps the stylesheet to achieve dark mode.
function changeTheme() {
  const theme = document.getElementById("theme");
  setTimeout(() => {
    toast.innerHTML = "Calculator";
  }, 1500);
  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);
    themeIcon.setAttribute("src", sunIcon);
    toast.innerHTML = "Dark Mode 🌙";
  } else {
    theme.setAttribute("href", lightTheme);
    themeIcon.setAttribute("src", moonIcon);
    toast.innerHTML = "Light Mode ☀️";
  }
}

// Displays entered value on screen.
function liveScreen(enteredValue) {
  if (!ans.value) {
    ans.value = "";
  }
  ans.value += enteredValue;
}

//adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs
function keyboardInputHandler(e) {
  // to fix the default behavior of browser,
  // enter and backspace were causing undesired behavior when some key was already in focus.
  e.preventDefault();
  //grabbing the liveScreen

  //numbers
  if (e.key === "0") {
    ans.value += "0";
  } else if (e.key === "1") {
    ans.value += "1";
  } else if (e.key === "2") {
    ans.value += "2";
  } else if (e.key === "3") {
    ans.value += "3";
  } else if (e.key === "4") {
    ans.value += "4";
  } else if (e.key === "5") {
    ans.value += "5";
  } else if (e.key === "6") {
    ans.value += "6";
  } else if (e.key === "7") {
    ans.value += "7";
  } else if (e.key === "7") {
    ans.value += "7";
  } else if (e.key === "8") {
    ans.value += "8";
  } else if (e.key === "9") {
    ans.value += "9";
  }

  //operators
  if (e.key === "+") {
    ans.value += "+";
  } else if (e.key === "-") {
    ans.value += "-";
  } else if (e.key === "*") {
    ans.value += "*";
  } else if (e.key === "/") {
    ans.value += "/";
  }

  //decimal key
  if (e.key === ".") {
    ans.value += ".";
  }

  //panss enter to see ansult
  if (e.key === "Enter") {
    calculate(answer.value);
  }

  //backspace for removing the last input
  if (e.key === "Backspace") {
    const answerInput = ans.value;
    //remove the last element in the string
    ans.value = answerInput.substring(0, ans.value.length - 1);
  }
}
