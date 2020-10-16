
function doubleIt(num) {
    return num * 2;
}
const result = doubleIt(50)
console.log(result);

const doubleIt1 = function (num1) {
    return num1 * 2;
}
const result1 = doubleIt1(10)
console.log(result1);

const doubleIt2 = num2 => num2 * 2 ;
const result2 = doubleIt2(30)
console.log(result2);

const add = (x,y) => x + y;
const result3 = add(5, 8);
console.log(result3);

const give4 = () => 4;
const result4 = give4();
console.log(result4);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}

const result5 = doMath(7, 5);
console.log(result5)