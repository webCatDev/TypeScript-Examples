"use strict";
var e1 = {
    name: 'Hamza',
    startDate: new Date(),
    privileges: ['create-server'],
};
// type guard - union
function addVars(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return String(a) + String(b);
    }
    return a + b;
}
function printEmployeesInformation(emp) {
    console.log(emp.name);
    if ('privileges' in emp)
        console.log(emp.privileges);
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("loading cargo... amount of loads: ".concat(amount));
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(100);
    }
}
useVehicle(v1);
useVehicle(v2);
var AnimalTypes;
(function (AnimalTypes) {
    AnimalTypes[AnimalTypes["BIRD"] = 0] = "BIRD";
    AnimalTypes[AnimalTypes["HORSE"] = 1] = "HORSE";
})(AnimalTypes || (AnimalTypes = {}));
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case AnimalTypes.BIRD:
            speed = animal.flyingSpeed;
            break;
        case AnimalTypes.HORSE:
            speed = animal.runningSpeed;
    }
    console.log("Moving at speed: ".concat(speed));
}
