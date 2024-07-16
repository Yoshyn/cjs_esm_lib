const deasync = require('deasync');

let isDone = false;
let myFunction;

import('./core.mjs').then(module => {
  myFunction = module.myFunction;
  isDone = true;
}).catch(err => {
  throw err;
});

deasync.loopWhile(() => !isDone);

const myFunction2 = () => {
  console.log('Hello from CommonJS!');
};

module.exports = {
  myFunction,
  myFunction2
};
