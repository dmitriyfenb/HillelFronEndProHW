const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');
let score = document.querySelector('#score');
let squares = [];


function randomNum(min, max) {
	return Math.floor(Math.random() * (max + 1 - min) + min);
}

function randomColor() {
	return '#' + Math.floor(Math.random()*16777215).toString(16)
}

function randomSpeed(min, max) {
	return Math.random() * (max - min) + min;
}



function addSquares() {
	let square = {
		x: randomNum(0, canvas.width - 20),
		y: -20,
		width: 20,
		height: 20,
		speed: randomSpeed(0.5, 1.5),
		color: randomColor()
	}
	squares.push(square);
}

function drawSquares() {
	for (let i = 0; i < squares.length; i++) {
		ctx.beginPath();
		ctx.rect(squares[i].x, squares[i].y, squares[i].width, squares[i].height);
		ctx.fillStyle = squares[i].color;
		ctx.fill();
		ctx.closePath();
		squares[i].y += squares[i].speed;
	}
}

function deleteSquares(event) {
	squares.forEach(function(square) {
		if (square.x <= event.offsetX &&
			square.x + square.width >= event.offsetX &&
			square.y <= event.offsetY &&
			square.y + square.height >= event.offsetY) {
			squares.splice(squares.indexOf(square), 1);
			score.innerHTML++;
		}
	})
}



function reset() {
	clearInterval();
	squares.splice(0, squares.length);
	score.innerHTML = 0;
	document.location.reload();
}



function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawSquares()
	requestAnimationFrame(animate);
}

function start() {
	setInterval(addSquares, randomNum(500, 800))
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', reset);
canvas.addEventListener('click', deleteSquares);
document.body.onload = animate;
