"use strict";

const ADMIN_LOGIN = "admin";
const ADMIN_PASSWORD = "m4ng0h4ckz";

let message = prompt("Введите логин");
console.log(message);
let password;

if (message === null) {
  console.log("Отменено пользователем");
} else if (message !== ADMIN_LOGIN) {
  console.log("Доступ запрещен, неверный логин!");
  alert("Доступ запрещен, неверный логин!");
} else {
  let password = prompt("Введите пароль");
  console.log(password);

  if (password === null) {
    console.log("Отменено пользователем!");
  } else if (password !== ADMIN_PASSWORD) {
    console.log("Доступ запрещен, неверный пароль");
    alert("Доступ запрещен, неверный пароль");
  } else {
    console.log("Добро пожаловать!");
    alert("Добро пожаловать!");
  }
}
