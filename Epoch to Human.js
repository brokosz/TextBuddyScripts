// epoch seconds to human readable time

function pre(str) {
  const date = new Date(parseInt(str, 10) * 1000);
  const utc = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  return `Local: ${date.toLocaleString()}
UTC: ${utc.toLocaleString()}`;
}