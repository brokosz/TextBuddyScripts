// convert to spongebobcase

function pre(str) {
  const chars = str.split("");
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * Math.floor(2));
    if (j == 0) {
        chars[i] = chars[i].toLowerCase();
    } else {
        chars[i] = chars[i].toUpperCase();
    }
  }
  return chars.join("");
}