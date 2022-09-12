const names: Array<string> = []; // string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(resolve, 2000, 'Hello world!');
});

promise.then(str => console.log(str))