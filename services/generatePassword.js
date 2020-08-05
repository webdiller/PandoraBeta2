module.exports = generatePassword = (len) => {
  const ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let out = "";
  for (let i = 0; i < len; i++) {
    let ch = Math.random(1, 2);
    if (ch < 0.5) {
      let ch2 = Math.ceil(Math.random(1, ints.length) * 10);
      out += ints[ch2];
    } else {
      let ch2 = Math.ceil(Math.random(1, chars.length) * 10);
      out += chars[ch2];
    }
  }
  return out;
};

// console.log(generate(10));
