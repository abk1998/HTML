//IIFE JAVA CONCEPTS
// (function greet(name) {
//     console.log('hello' + name);
// })('Abk');
// var sum = function(n1, n2, n3) {
//     return n1 + n2 + n3;
// }(19, 29, 30);
// console.log(sum);

function avgOfNum(x, y) {
    var sum1 = function() {
        return x + y;
    }
    return sum1() / 2;
}
var result = avgOfNum(10, 20);
console.log(result);


(function(x, y) {
    return function() {
        return (x + y);
    }
})(10, 20);

//var result = avgOfNum(10, 20);
console.log(result());
console.log(average(10, 20)());