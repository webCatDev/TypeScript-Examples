interface Named {
    readonly name: string;  // only readonly works in interface
    output?: string // optional
}

interface Greatable extends Named {
	greet(phrase: string): void;
}

class Person implements Greatable {
    constructor(public name: string, public age: number) { }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
    }
}

const user = new Person('David', 24)

user.greet('Hello')

type AddFn = (number1: number, number2: number) => number
// interface AddFn2 { (number1: number, number2: number): number } // we can use interface to define function

let add: AddFn;

add = function (n1, n2){
    return n1 + n2
}