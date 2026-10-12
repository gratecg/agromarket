const themeToggleBtn = document.querySelector("#themeToggleBtn");

themeToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeToggleBtn.textContent = "☀️ Светлая тема";
  } else {
    themeToggleBtn.textContent = "🌙 Тёмная тема";
  }
});

// Обработка формы приветствия
const userNameInput = document.querySelector("#userNameInput");
const greetUserBtn = document.querySelector("#greetUserBtn");
const customGreetingText = document.querySelector("#customGreetingText");

greetUserBtn.addEventListener("click", function () {
  const name = userNameInput.value.trim();

  if (name !== "") {
    customGreetingText.textContent = `Приятно познакомиться, ${name}! 👋`;
    customGreetingText.style.color = "var(--accent-color)";
    userNameInput.value = "";
  } else {
    customGreetingText.textContent = "Пожалуйста, введите ваше имя.";
    customGreetingText.style.color = "red";
  }
});