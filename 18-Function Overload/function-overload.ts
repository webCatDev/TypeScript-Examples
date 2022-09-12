type Combinable3 = string | number;

function addThings(n1: number, n2: string): string;
function addThings(n1: string, n2: number): string;
function addThings(n1: string, n2: string): string;
function addThings(n1: number, n2: number): number;
function addThings(n1: Combinable3, n2: Combinable3) {
	if (typeof n1 === 'string' || typeof n2 === 'string') {
		return n1.toString() + n2.toString();
	}

	return n1 + n2;
}

const result = addThings(2, 3);
const result2 = addThings('2', '3');
