let totalCash = prompt('Введите сумму наличных:');

let watchesCount = prompt('Введите количество золотых часов:');
let earringsCount = prompt('Введите количество сережек:');

let unitCost = prompt('Введите стоимость одного украшения:');

let watchesSum = parseInt(unitCost * watchesCount);
let earringsSum = parseInt(unitCost * earringsCount);

console.log(totalCash + " >= " + watchesSum + " + " + earringsSum + " ?");

console.log(parseInt(totalCash) >= watchesSum + earringsSum);