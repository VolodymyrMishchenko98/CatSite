document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const btn = document.querySelector(".btn--secondary");
  const note = document.querySelector(".pulse-note");

  if (btn && note) {
    btn.addEventListener("click", () => {
      const sounds = ["Мяу! 😺", "Лев дуже радий! 🐾", "Вова — найкращий друг! 💛"];
      const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
      note.textContent = randomSound;
    });
  }
});
