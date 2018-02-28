module.exports = function check(str, bracketsConfig) {
  var i,
      symbol,
      temporarySymbol;
  var lengthStr = str.length;

  var temp = [],
      openingBrackets = [],
      closingBrackets = [];

  bracketsConfig.map(function (element) {
    openingBrackets.push(element[0]);
    closingBrackets.push(element[1]);
  });

  temp.push(str[0]);

  for (i = 1; i < lengthStr; i++) {
    symbol = str[i];

    if (openingBrackets.indexOf(symbol) > -1) {
      if (openingBrackets.indexOf(symbol) > -1 && closingBrackets.indexOf(symbol) > -1) {
        if (symbol == temp[temp.length - 1]) {
          temp.pop();
          continue;
        }
      }

      temp.push(symbol);
    } else if (closingBrackets.indexOf(symbol) > -1) {

      temporarySymbol = openingBrackets[closingBrackets.indexOf(symbol)];
      if (temp.length === 0 || temp.pop() !== temporarySymbol) {
        return false;
      }
    }
  }

  if (temp.length !== 0) {
    return false;
  }

  return true;
}
}
