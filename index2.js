const loginbtn = document.querySelector(".login-button");
const hide = document.querySelector(".welcome-content");
const show = document.querySelector(".login-box");

loginbtn.addEventListener("click", () => {
  hide.style.display = "none";   // hide welcome-content
  show.style.display = "block";  // show login-box
});




// fixed username & password you want
const correctUsername = "942230211";
const correctPassword = "TFSHAN@1234";

const loginBtn = document.querySelector(".log");
const usernameInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");

function handleLogin() {
  const enteredUsername = usernameInput.value.trim();
  const enteredPassword = passwordInput.value.trim();

  if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
    window.location.href = "home.html";
  } else {
    alert("فشل تسجيل الدخول");
  }
}

loginBtn.addEventListener("click", handleLogin);