
const a = [];
const b = a;

b.push(1);

console.log('Objects are passed by reference');
console.log('a', a);
console.log('b', b);
console.log('b points to a');
