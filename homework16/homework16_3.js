/* 3) Для этого задания вам понадобится файл index.html прикрепленный внизу.
Запросите у пользователя число и добавьте в форму теги <input> (перед кнопкной Register) равных этому числую.
Требования к тегу <input>:
каждый инпут должен содержать класс input-item, value = `Input ${index}`;
последний инпут должен иметь дополнительный класс margin-zero;
создайте собственный класс, со свойством background-color и добавьте его всем нечетным инпутам;
очистите значение каждому третьему инпуту и задайте ему атрибут placeholder с любым текстом.
Ожидаемый результат прикреплен внизу. */


/* ------------РЕШЕНИЕ------------ */


  function createInput() {
    let inputCount = Number(prompt('Введите число'));
  
    if(inputCount) {
      for(let i = 1; i <= inputCount; i++) {
        let input = document.createElement('input');
            input.className = 'input-item';
            input.value = `Input ${i}`;
  
        if (i % 2) {
          input.classList.add('background-color');
        }
  
        if (i % 3 == 0) {
          input.value = '';
          input.placeholder = 'Some text';
        }
  
        if(i === (inputCount - 1)) {
          input.classList.add('margin-zero');
        }
  
        document.querySelector('form .button').before(input);
      }
    }
  }
  
  createInput();