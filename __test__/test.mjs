import quibble from 'quibble'

await quibble.esm('../src/subdep.mjs', { myFunction:() => { return 'mocked subdep ! Yeah !' } }, { mocked : 'replacement universe' });
const subdep = await import('../src/subdep.mjs');
console.log(subdep.myFunction()); // OK

console.log('-------------------');

const subject = await import('../src/utils.mjs');
const result = subject.fetchData()
console.log(result); // FAIL

// import * as td from 'testdouble'
// import quibble from 'quibble'
// import { describe, test, beforeEach, it } from 'node:test';
// import assert from 'node:assert';

// // let subject = null
// // let subdep = null

// await quibble.esm('../src/subdep.mjs', { myFunction:() => { return 41 } }, { mocked : 'replacement universe' });
// console.log(quibble.isLoaderLoaded());
// console.log(quibble.listMockedModules());
// const subdep = await import('../src/subdep.mjs');

// console.log(subdep);
// console.log(subdep.myFunction());
// console.log(quibble.isLoaderLoaded());

// console.log('-------------------');

// const subject = await import('../src/utils.mjs');
// console.log('----------');
// console.log(subject);
// console.log('----------');
// const result = subject.fetchData()

// console.log(quibble.isLoaderLoaded());
// console.log(quibble.listMockedModules());

// console.log(result);

// describe('tests', async () => {

//   // This test pass
//   it('Real data', async() => {
//     subject = await import('../src/utils.mjs')
//     const result = subject.fetchData()

//     assert.strictEqual(result, 'real data : real subdep')
//     td.reset()
//   });

//   // this test pass
//   it('Direct module mock', async() => {
//     subdep = (await td.replaceEsm('../src/subdep.mjs'))
//     td.when(subdep.myFunction()).thenReturn(55)
//     const toto = await import('../src/subdep.mjs')

//     assert.strictEqual(toto.myFunction(), 55)
//     td.reset()
//   });

//   // this test DO not pass
//   it('Indirect module mock', async() => {
//     subdep = (await td.replaceEsm('../src/subdep.mjs'))
//     td.when(subdep.myFunction()).thenReturn(55)

//     subject = await import('../src/utils.mjs')
//     const result = subject.fetchData()

//     console.log(result);

//     assert.strictEqual(result, 'real data : 55')
//     td.reset()
//   });

// });

