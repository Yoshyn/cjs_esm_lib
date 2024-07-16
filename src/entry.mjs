import { myFunction } from './core.mjs';

const myFunction2 = () => {
  console.log('Hello from ES Modules!');
};

export {
  myFunction,
  myFunction2
};

