let value = prompt("Введите число:");

value = parseInt(value);

if (value <= 0) {
	console.log(value);
}
else {
	console.log(value - (value * 2));
}