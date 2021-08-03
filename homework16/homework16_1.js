// function changeBackground(color) {
//     main.style.background = color;
    
// }
// window.addEventListener("load",function() { 
//     changeBackground('green') 
// });

// let paragraf = document.querySelector('p');

// paragraf.style.color = 'red';

// let main = document.querySelector('#main');
// let lastPar = main.lastElementChild.innerHTML;
// console.log(lastPar);




// let paragraf = document.querySelectorAll('p');
// console.log(paragraf);


/* ---------РЕШЕНИЕ---------- */
let main = document.querySelector('#main');
main.lastElementChild.style.color = 'red';
    
let changePlace = document.querySelector('#wrapper');
let footer = document.querySelector('#footer');
changePlace.append(footer);


// let image = document.createElement('img');
// let questionUser = confirm('Вы хотите добавить картинку?');
// if (questionUser == true) {
//     image.src = prompt('Сссылка на картинку');
// } else {
//     confirm('Вы уверены?')
// }



// let main = document.querySelector('#wrapper');
// main.append(image);
// document.body.prepend(main);