const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');


function randomNum(min, max) {
	return Math.floor(Math.random() * (max + 1 - min) + min);
}

function randomColor() {
	return '#' + Math.floor(Math.random()*16777215).toString(16)
}

function randomSpeed(min, max) {
	return Math.random() * (max - min) + min;
}

let squares = [];

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

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawSquares()
	requestAnimationFrame(animate);
}

function start() {
	setInterval(addSquares, randomNum(500, 800))
}

startButton.addEventListener('click', start);
document.body.onload = animate;