// from unicode
// Returns a readable string from unicode escaped string (js format)

function pre(str) {
  return str.split("\\u").map(u => {
    return String.fromCharCode(parseInt(u, 16));
  }).join("");
  }
