/* 2) Напишите функцию, которая создает нумерованный подсписок по клику на опцию li.
Нажав на любой тег, должен появится нумерованный список ингридиентов из данного меню. Вы можете использовать представленный объект.
Используйте делегирование событий для реализации.
upd: Обновите код так, чтобы по второму клику на li, список ингридиентов удалялся. */



/* ------------------------------РЕШЕНИЕ---------------------------------- */


const INGREDIENTS = {
    "cocoa": ["cocoa powder", "milk", "sugar"],
    "cappuccino": ["milk", "coffee"],
    "smoothie": ["banana", "orange", "sugar"],
    "matcha frappe": ["matcha", "milk", "ice"]
};

function listIngridients(event) {
    let ol = document.createElement('ol');
    if (event.target.children.length > 0) {
        document.querySelector('ol').remove();
    } else {
        for (let i = 0; i < INGREDIENTS[event.target.innerHTML].length; i++) {
            let addLi = document.createElement('li');
            addLi.innerHTML = INGREDIENTS[event.target.innerHTML][i];
            ol.append(addLi);
        }
        event.target.append(ol);
    }
}

menu.addEventListener('click', listIngridients);