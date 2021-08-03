let num = Number(prompt('Введите число'));
function createMatrixFn(num) {
    let table = document.querySelector('#matrix');
    for (let i = 1; i <= num; i++) {
        let trElements = document.createElement('tr');
        table.append(trElements);
        for (let x = 0; x < num; x++) {
            let tdElements = document.createElement('td');
            tdElements.append(document.createTextNode(x + i));
            trElements.append(tdElements);
        };
        table.append(trElements);
    };
};

let color = prompt('Введите цвет');
function changeColor(color) {
    let table = document.querySelector('#matrix');
    let rows = table.rows;
    for (let i = rows.length - 1; i >= 0; i--) {
        for (let x = 0; x < rows.length; x++) {
            if (i + x == rows.length - 1) {
                rows[i].cells[x].style.background = color;
            };
        };
    };
};
createMatrixFn(num);
changeColor(color);