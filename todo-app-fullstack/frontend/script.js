let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
let todos = currentUser ? currentUser.todos : [];
let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
const API_BASE_URL = "http://localhost:5000/api/v1";

const form = document.querySelector(".todo-form");
const input = document.querySelector(".todo-input");
const list = document.querySelector(".todo-list");
const emptyState = document.querySelector(".empty-state");
const itemsLeft = document.querySelector(".items-count");
const clearBtn = document.querySelector(".clear-btn");
const login = document.querySelectorAll(".container")[0];
const app = document.querySelectorAll(".container")[1];
const register = document.querySelectorAll(".container")[2];
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const logout = document.querySelector(".logout-btn");
const toggleLogin = document.querySelector("#toggle-register");
const toggleRegister = document.querySelector("#toggle-login");

toggleLogin.addEventListener("click", () => {
  login.classList.add("hidden");
  register.classList.remove("hidden");
});

toggleRegister.addEventListener("click", () => {
  register.classList.add("hidden");
  login.classList.remove("hidden");
});

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("reg-email").value.trim().toLowerCase();
  const password = document.getElementById("reg-password").value.trim();
  const errorMsg = document.querySelector(".reg-error");
  errorMsg.innerText = "";
  try {
    const response = await fetch(`${API_BASE_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();
    if (result.success) {
      register.classList.add("hidden");
      login.classList.remove("hidden");
    } else {
      errorMsg.innerText = result.message || "Registration failed.";
    }
  } catch (err) {
    errorMsg.innerText = "Error: Backend server is not reachable.";
  }
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.querySelector(".error-msg");
  errorMsg.innerText = "";

  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (result.success) {
      isLoggedIn = true;
      currentUser = result.data;
      todos = result.data.todos || [];

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(result.data));
      auth();
    } else {
      errorMsg.innerText = result.message || "Invalid credentials.";
    }
  } catch (err) {
    errorMsg.innerText ="Error: Backend server is not reachable.";
    console.error("Login Error:", err);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false,
    isEditing: false,
    createdAt: new Date().toLocaleString(),
  };

  todos.unshift(newTodo);
  input.value = "";
  saveAndLoad();
});

function auth() {
  if (isLoggedIn) {
    login.classList.add("hidden");
    app.classList.remove("hidden");
    register.classList.add("hidden");
    loadTodos();
  } else {
    login.classList.remove("hidden");
    app.classList.add("hidden");
    register.classList.add("hidden");
  }
}

async function saveAndLoad() {
  loadTodos();
  if (currentUser) {
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ ...currentUser, todos }),
    );

    try {
      const response = await fetch(`${API_BASE_URL}/todos/sync-todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: currentUser.email,
          todos: todos,
        }),
      });

      const result = await response.json();
      if (!result.success) {
        console.warn("Sync failed:", result.message);
      }
    } catch (err) {
      console.log("Server sync pending (Offline mode)...");
    }
  }
}

function loadTodos() {
  list.innerHTML = "";
  emptyState.style.display = todos.length === 0 ? "block" : "none";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.completed ? "completed-item" : ""}`;

    if (todo.isEditing) {
      li.innerHTML = `
                        <div class="todo-wrapper">
                        <div class="todo-content">
                            <input type="text" class="edit-input" value="${todo.text}">
                        </div>
                        <div class="actions">
                            <button onclick="saveEdit(${todo.id})" class="action-btn" style="color: #1d4ed8">Save</button>
                            <button onclick="toggleEdit(${todo.id})" class="action-btn cancel-btn">Cancel</button>
                        </div>
                        </div>
                        <div class="todo-date">Added on: ${todo.createdAt}</div>
                    `;
    } else {
      li.innerHTML = `
                        <div class="todo-wrapper">
                        <div class="todo-content">
                            <div onclick="toggleComplete(${todo.id})" class="checkbox ${todo.completed ? "checked" : ""}">
                                ${todo.completed ? "✔" : ""}
                            </div>
                            <span class="todo-text ${todo.completed ? "completed" : ""}">${todo.text}</span>
                        </div>
                        <div class="actions">
                            <button onclick="toggleEdit(${todo.id})" class="action-btn edit-btn">Edit</button>
                            <button onclick="deleteTodo(${todo.id})" class="action-btn delete-btn">Delete</button>
                        </div>
                        </div>
                        <div class="todo-date">Added on: ${todo.createdAt}</div>
                    `;
    }
    list.appendChild(li);
  });

  const activeCount = todos.filter((t) => !t.completed).length;
  itemsLeft.innerText = `${activeCount} item${activeCount !== 1 ? "s" : ""} left`;
}

function toggleComplete(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  );
  saveAndLoad();
}

function toggleEdit(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo,
  );
  loadTodos();
}

function saveEdit(id) {
  const editInput = document.querySelector(".edit-input");
  const newText = editInput.value.trim();
  if (newText) {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText, isEditing: false } : todo,
    );
    saveAndLoad();
  }
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveAndLoad();
}

function clearCompleted() {
  todos = todos.filter((todo) => !todo.completed);
  saveAndLoad();
}

logout.addEventListener("click", () => {
  isLoggedIn = false;
  localStorage.setItem("isLoggedIn", "false");
  localStorage.removeItem("currentUser");
  auth();
});
clearBtn.addEventListener("click", clearCompleted);
window.addEventListener("load", auth);
