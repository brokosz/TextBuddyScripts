//convert spaces to CamelCase

function perLine(lineOfText) {
  return lineOfText.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 1 ? match.toLowerCase() : match.toUpperCase();
  });
}