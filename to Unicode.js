// to unicode
// Converts a UTF8 string to unicode escaped chars(js format)

function pre(str) {
  return [...str].map(c => {
    let hex = c.charCodeAt(0).toString(16);
    if (hex.length == 2) hex = "00" + hex;
    return ("\\u" + hex).slice(-7);
  }).join("");
  }