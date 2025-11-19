console.log('Load src/utils.mjs');
import { myFunction } from './subDep.mjs'

export function fetchData() {
    const res = myFunction();
    return `real utils.fetchData function is called with subdep : ${res}`;
}
