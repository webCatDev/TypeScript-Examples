function divide(n1: number, n2: number) {
    return n1 / n2
}

let divideNumbers: (a:number, b:number) => number;
divideNumbers = divide

console.log(divideNumbers(4, 2))


const printSum = (n:number, n2: number, cb: (result: number) => void): void => cb(n + n2)
printSum(2,3, (res)=> console.log(res))