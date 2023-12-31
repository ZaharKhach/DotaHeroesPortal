export function formatNumberWithDots(number) {
  // Преобразовать число в строку
  const numberString = number.toString();
  // Разделить строку на группы по три цифры, начиная с конца
  const groups = [];
  for (let i = numberString.length; i > 0; i -= 3) {
    groups.unshift(numberString.slice(Math.max(i - 3, 0), i));
  }
  // Соединить группы точками
  const formattedNumber = groups.join('.');
  return +formattedNumber;
}
export function searchSymbol(symbol, heroes) {
  const searchTerm = symbol.toLowerCase();

  if (searchTerm.length === 0) {
    return heroes;
  }

  console.log(heroes)
  return heroes.filter(hero => hero.name.toLowerCase().startsWith(searchTerm));
}
export function filterData(data, id) {
  let dataArr = [];
  for (let key in data) {
    dataArr.push(data[key]);
  }

  return dataArr.filter((item) => item.id === +id);
}