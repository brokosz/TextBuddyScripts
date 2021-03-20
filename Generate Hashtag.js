//generate hashtags from a word or sentence

function pre(str) {
  return "#" + str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return "";
    return index === 1 ? match.toLowerCase() : match.toUpperCase();
  });
}