const numberValue = [];
for (let i = 0; i <= 9; i++) {
  numberValue.push(i.toString());
}

const lowerCaseValue = [];
for (let i = 97; i <= 122; i++) {
  lowerCaseValue.push(String.fromCharCode(i));
}

const upperCaseValue = [];
for (let i = 65; i <= 90; i++) {
  upperCaseValue.push(String.fromCharCode(i));
}

const symbolValue = ['!', '@', '#', '$', '%', '^', '&', '*'];

const ambiguousValue = [
  '{',
  '}',
  '[',
  ']',
  '(',
  ')',
  '/',
  "'",
  '"',
  '~',
  ',',
  '.',
  ';',
  ':',
  '<',
  '>',
];

export {
  numberValue,
  lowerCaseValue,
  upperCaseValue,
  symbolValue,
  ambiguousValue,
};
