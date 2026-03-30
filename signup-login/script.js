const loginView = document.querySelector("#login-view");
const registerView = document.querySelector("#register-view");
const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");
const toggleToRegister = document.querySelector("#toggle-to-register");
const toggleToLogin = document.querySelector("#toggle-to-login");
const logOutBtn = document.querySelector("#logout-btn");
const appView = document.querySelector("#app-view");
const loginBtn = document.querySelector("#login-btn");
const registerBtn = document.querySelector("#register-btn");
const API_BASE_URL = "https://restaurant-backend-3jsp.onrender.com/api/v1";
let user = JSON.parse(localStorage.getItem("currentUser")) || null;
let isLoggedIn = user !== null;
const userEmail = document.querySelector("#user-email");
const userPhone = document.querySelector("#user-number");
const userName = document.querySelector("#user-fullname");
const greet = document.querySelector("#greet");

toggleToRegister.addEventListener("click", () => {
  loginView.classList.add("hidden");
  registerView.classList.remove("hidden");
});

toggleToLogin.addEventListener("click", () => {
  registerView.classList.add("hidden");
  loginView.classList.remove("hidden");
});

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  registerBtn.innerText = "Registering...";
  registerBtn.style.pointerEvents = "none";
  const fullname = document.querySelector("#full-name").value.trim();
  const email = document.querySelector("#reg-email").value.trim().toLowerCase();
  const password = document.querySelector("#reg-password").value.trim();
  const phoneNumber = document.querySelector("#number").value.trim();
  const errorMsg = document.querySelector(".reg-error-msg");
  errorMsg.innerText = "";
  try {
    const response = await fetch(`${API_BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        password,
        phoneNumber,
      }),
    });
    const result = await response.json();
    if (result.success) {
      registerBtn.style.pointerEvents = "auto";
      registerBtn.innerText = "Register";
      document.querySelector("#full-name").value = "";
      document.querySelector("#reg-email").value = "";
      document.querySelector("#reg-password").value = "";
      document.querySelector("#number").value = "";
      console.log(result.message);
      console.table(result.data);
      auth();
    } else {
      registerBtn.style.pointerEvents = "auto";
      registerBtn.innerText = "Register";
      errorMsg.innerText = result.message || "Registration failed.";
    }
  } catch (error) {
    registerBtn.style.pointerEvents = "auto";
    registerBtn.innerText = "Register";
    errorMsg.innerText = "Error: Backend server is not reachable.";
    console.error("Registration Error:", error);
  }
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  loginBtn.style.pointerEvents = "none";
  loginBtn.innerText = "Logging in...";
  const email = document.querySelector("#log-email").value.trim().toLowerCase();
  const password = document.querySelector("#log-password").value.trim();
  const errorMsg = document.querySelector(".log-error-msg");
  errorMsg.innerText = "";
  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const result = await response.json();
    if (result.success) {
      document.querySelector("#log-email").value = "";
      document.querySelector("#log-password").value = "";
      user = result.data.user;
      localStorage.setItem("currentUser", JSON.stringify(result.data.user));
      console.log(result.message);
      console.table(result.data.user);
      console.log("Access Token:", result.data.accessToken);
      console.log("Refresh Token:", result.data.refreshToken);
      localStorage.setItem("accessToken", result.data.accessToken);
      localStorage.setItem("refreshToken", result.data.refreshToken);
      isLoggedIn = true;
      loginBtn.innerText = "Login";
      loginBtn.style.pointerEvents = "auto";
      auth();
    } else {
      loginBtn.style.pointerEvents = "auto";
      loginBtn.innerText = "Login";
      errorMsg.innerText = result.message || "Invalid credentials.";
    }
  } catch (error) {
    loginBtn.style.pointerEvents = "auto";
    loginBtn.innerText = "Login";
    errorMsg.innerText = "Error: Backend server is not reachable.";
    console.error("Login Error:", error);
  }
});

function auth() {
  if (isLoggedIn) {
    loginView.classList.add("hidden");
    registerView.classList.add("hidden");
    appView.classList.remove("hidden");
    userEmail.innerText = user.email;
    userPhone.innerText = user.phoneNumber;
    userName.innerText = user.fullname;
    greet.innerText = `Welcome back, ${user.fullname.split(" ")[0]}!`;
  } else {
    loginView.classList.remove("hidden");
    registerView.classList.add("hidden");
    appView.classList.add("hidden");
  }
}

logOutBtn.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  isLoggedIn = false;
  auth();
});

window.addEventListener("load", auth);
