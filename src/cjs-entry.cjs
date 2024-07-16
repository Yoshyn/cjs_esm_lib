const myFunction2 = () => {
  console.log('Hello from CommonJS!');
};

const deasync = require('deasync');

let isDone = false;
let myFunction;

import('./core.js').then(module => {
  myFunction = module.myFunction;
  isDone = true;
}).catch(err => {
  throw err;
});

deasync.loopWhile(() => !isDone);

module.exports = {
  myFunction,
  myFunction2
};
