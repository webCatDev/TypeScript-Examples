// const userInput2 = <HTMLInputElement>document.getElementById('user-input') // same but different ways
const userInput2 = document.getElementById('user-input') as HTMLInputElement
userInput2.value = 'Hi there!'

// or if we dont know if the element exist

// const userInput2 = document.getElementById('user-input');

// if (userInput2) {
//    ( userInput2 as HTMLInputElement).value = 'Say something...'
// }

