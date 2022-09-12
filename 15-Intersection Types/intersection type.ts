type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // & : intersection operator

const e1: ElevatedEmployee = {
	name: 'Hamza',
	startDate: new Date(),
	privileges: ['create-server'],
};

type Combinable2 = number | string;
type Numeric = number | boolean;

type Universal = Combinable2 & Numeric;

// type guard - union
function addVars(a: Combinable, b: Combinable2) {
	if (typeof a === 'string' || typeof b === 'string') {
		return String(a) + String(b);
	}
	return a + b;
}

type UnknownEmployee = Admin | Employee;

function printEmployeesInformation(emp: UnknownEmployee) {
	console.log(emp.name);
	if ('privileges' in emp) console.log(emp.privileges);
}

class Car {
	drive() {
		console.log('Driving...');
	}
}

class Truck {
	drive() {
		console.log('Driving a truck...');
	}

	loadCargo(amount: number) {
		console.log(`loading cargo... amount of loads: ${amount}`);
	}
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
	vehicle.drive();
	if (vehicle instanceof Truck) {
		vehicle.loadCargo(100);
	}
}

useVehicle(v1);
useVehicle(v2);

enum AnimalTypes {
	BIRD,
	HORSE,
}

interface Bird {
	type: AnimalTypes.BIRD;
	flyingSpeed: 20;
}

interface Horse {
	type: AnimalTypes.HORSE;
	runningSpeed: 15;
}

type Animal2 = Bird | Horse;

function moveAnimal(animal: Animal2) {
	let speed: number;
	switch (animal.type) {
		case AnimalTypes.BIRD:
			speed = animal.flyingSpeed;
			break;
		case AnimalTypes.HORSE:
			speed = animal.runningSpeed;
	}

	console.log(`Moving at speed: ${speed}`);
}
