const getSome = require('.');
const assert = require('assert');

try {
  const a = getSome(() => {});
  a[0];
} catch (e) {
  assertWithMessage(e.message === 'The return value of `getSome` must be destructured as an array', 'throws when not called as iterator');
}

const [first, second] = getSome(() => new Object());
assertWithMessage(first !== second, 'calls factory for each');

const [a,b] = getSome(i => String.fromCharCode(i+65));
assertWithMessage(a === 'A' && b === 'B', 'gets index from iterator');

const numbers = getSome(i => i);
const [zero] = numbers;
const [one] = numbers;
assertWithMessage(zero === 0 && one === 1, 'can be reused');

function assertWithMessage(expectation, message) {
  try {
    assert(expectation);
    console.log('success on ' + message);
  } catch(e) {
    console.error('failed on ' + message);
    throw e;
  }
}
