let date = new Date();
date = new Date(
  Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  )
);

console.log(date.getFullYear());
console.log((date.getMonth() + 1).toString().padStart(2, "0"));
console.log(date.getDate().toString().padStart(2, "0"));
