let image = document.createElement('img');
let questionUser = confirm('Вы хотите добавить картинку?');
if (questionUser == true) {
    image.src = prompt('Сссылка на картинку');
} else {
    confirm('Вы уверены?')
}



let main = document.querySelector('#wrapper');
main.append(image);
document.body.prepend(main);