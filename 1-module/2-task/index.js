'use strict';

function print(text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
    let validName = name.match(/^[а-яёЁa-z]{4,}$/i);
    return validName;
};

function sayHello() {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
};

