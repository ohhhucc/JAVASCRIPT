const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'

if (player == rock && computer == scissors) {
	console.log('player choice: rock');
	console.log('computer choice: scissors');
	console.log('player win, rock > scissors');
}
else if (player == scissors && computer == rock) {
	console.log('player choice: scissors');
	console.log('computer choice: rock');
	console.log('computer win, rock > scissors');
}
else if (player == scissors && computer == paper) {
	console.log('player choice: scissors');
	console.log('computer choice: paper');
	console.log('player win, scissors > paper')
}
else if (player == paper && computer == scissors) {
	console.log('player choice: paper');
	console.log('computer choice: scissors');
	console.log('computer win, scissors > paper')
}
else if (player == paper && computer == rock) {
	console.log('player choice: paper');
	console.log('computer choice: rock');
	console.log('player win, paper > rock')
}
else if (player == rock && computer == paper) {
	console.log('player choice: rock');
	console.log('computer choice: paper');
	console.log('computer win, paper > rock')
}
else if (player == computer) {
	console.log('draw');
}
else {
	console.log('введите число от 0 до 2');
}