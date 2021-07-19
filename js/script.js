function closure(a) {
    return function (b) {        
        return a += b;
    }
}
let sum = closure(0);

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
console.log(sum(25));


