require('colors');

let prettyPrint = (a, ...args) => {
  let msg = '[';

  for (let i = 0; i < a.length; i++) {
    if (i === args[0] && i === a.length - 1) {
      msg += `${a[i]}`.bgRed.black;
    } else if (i === args[0] && i !== a.length - 1) {
      msg += `${a[i]}`.bgRed.black + ', ';
    } else if (i === args[1] && i === a.length - 1) {
      msg += `${a[i]}`.bgGreen.black;
    } else if (i === args[1] && i !== a.length - 1) {
      msg += `${a[i]}`.bgGreen.black + ', ';
    } else if (i === args[2] && i === a.length - 1) {
      msg += `${a[i]}`.bgBlue.black;
    } else if (i === args[2] && i !== a.length - 1) {
      msg += `${a[i]}`.bgBlue.black + ', ';
    } else if (i === a.length - 1) {
      msg += `${a[i]}`;
    } else {
      msg += `${a[i]}, `;
    }
  }

  msg += ']';

  console.log(msg);
}
