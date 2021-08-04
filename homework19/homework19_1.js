/* 1) Напишите функцию, которая ищет подходящие фильмы из заданного списка.
Используйте значение из инпута #search и событие input, чтобы подсчитать количество фильмов, которые удоблетворяют строке поиска. Выведите общий результат найденных фильмов в #filmsCount. */




/* ------------------------------РЕШЕНИЕ---------------------------------- */

let inputSearch = document.querySelector('#search');
let film = document.querySelectorAll('li');

function searchFilms() {
  let counter = 0;
  
  for (i = 0; i < film.length; i++) {
    if (event.target.value == '') {
        counter = 0;
    }
    else if(film[i].innerHTML.indexOf(event.target.value) >= 0) {
      counter++;
    }
  }
  document.querySelector('#filmsCount').innerHTML = counter;
}
inputSearch.addEventListener('input', searchFilms);