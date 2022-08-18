export function getBetween8To128Numbers() {
  const results = [];
  for (let i = 8; i <= 128; i++) {
    results.push(i);
  }
  return results;
}

export function getMixArray(option) {
  const results = [];

  if (option.symbol) results.push(...getSymbols());
  if (option.number) results.push(...getNumbers());
  if (option.lower) results.push(...getLowerCaseNumbers());
  if (option.upper) results.push(...getUpperCaseNumbers());
  if (option.similar) {
    getSimilars().forEach(item => {
      let index = results.indexOf(item);

      if (index !== -1) {
        results.splice(index, 1);
      }
    });
  }

  return results;
}

function getSymbols() {
  return ['@', '#', '$', '%', '^', '&', '*'];
}

function getNumbers() {
  const results = [];
  for (let i = 0; i <= 9; i++) {
    results.push(i.toString());
  }
  return results;
}

function getLowerCaseNumbers() {
  const results = [];
  for (let i = 97; i <= 122; i++) {
    results.push(String.fromCharCode(i));
  }
  return results;
}

function getUpperCaseNumbers() {
  const results = [];
  for (let i = 65; i <= 90; i++) {
    results.push(String.fromCharCode(i));
  }
  return results;
}

function getSimilars() {
  return ['i', 'I', 'l', 'L', '1', 'o', 'O', '0'];
}
