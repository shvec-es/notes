import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { refs } from "./js/refs";
import { addTask, deleteTask, getAllTasks } from "./js/tasks";
import { initTheme, themeSwitcher } from "./js/theme-switcher";

// 2 - додаємо слухача на форму, забираємо значення з інпутів з перевіркою на пустий рядок
refs.form.addEventListener("submit", e => {
  e.preventDefault();

  const [taskName, taskDescription] = e.target.elements;
  const title = taskName.value.trim();
  const description = taskDescription.value.trim();

  if (title === "" || description === "") {
    iziToast.warning({ position: "center", message: "Fill all fields please" });
    return;
  }
  // створюємо обʼєкт таски для додавання до масива
  const task = { title, description };
  //   3 - додаємо таску
  addTask(task);

  refs.form.reset();
});

// 4 - дістаємо таски з ЛС при завантаженні сторінки
getAllTasks();

// 5 - додаємо слухача на список для видалення таски
refs.taskList.addEventListener("click", e => {
  // перевіряємо що клікаємо саме на кнопку
  if (e.target.nodeName !== "BUTTON") return;
  // забираємо заголовок таски де клікнули для видалення
  const titleForDelete = e.target.nextElementSibling.textContent;
  //   передаємо заголовок в функцію видалення
  deleteTask(titleForDelete);
});

// 6 - перевіряємо тему при завантаженні сторінки
initTheme();

// 7 - додаємо слухача на кнопку для перемикання теми
refs.themeSwitcher.addEventListener("click", themeSwitcher);
