//original function
function add(num1, num2, num3) {
    return num1 + num2 + num3;
}

//curry function
function add2(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3;
        }
    }
}

//arrow curry function
const add3 = (num1) => (num2) => (num3) => num1 + num2 + num3;

console.log(add(1, 2, 3));
console.log(add2(1)(2)(3));
console.log(add3(1)(2)(3));

