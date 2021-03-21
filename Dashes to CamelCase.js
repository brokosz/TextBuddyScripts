// convert dashes to CamelCase

function pre(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\-+)/g, function(match, index) {
    if (+match === 0) return "";
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}