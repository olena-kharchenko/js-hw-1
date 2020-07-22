const insert = prompt('Введите количество дней');
const weeks = Math.floor(insert / 7);
const days = insert - weeks * 7;

console.log(`${weeks} недель и ${days} дней`);
