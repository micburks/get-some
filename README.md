# get-some

Get an arbitrary number of values from a factory function

```bash
npm i -S get-some
```

`getSome` runs a factory function when you try to destructure the return value
as an array. You can destructure the return value as many times as you want.


```js
import getSome from 'get-some';

// Pass a factory function that will run for each variable you destructure
const [istanbul, constantinople] = getSome(() => new Object());
console.log(istanbul == constantinople);
// false


// The factory function will be passed an index you can use
const [a, b, c] = getSome(i => String.fromCharCode(i+65));
console.log(a, b, c);
// 'A' 'B' 'C'


// You can reuse the return value
const numbers = getSome(i => i);

const [one, two] = numbers
console.log(one, two);
// 1 2

const [three, four] = numbers
console.log(three, four);
// 3 4
```
