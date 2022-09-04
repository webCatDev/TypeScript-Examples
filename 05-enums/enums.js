"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["MODERATOR"] = 2] = "MODERATOR";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User(role) {
        this.role = role;
    }
    return User;
}());
var users = [];
users[0] = new User(Role.MODERATOR);
var Animal;
(function (Animal) {
    Animal["CAT"] = "Cat";
    Animal["DOG"] = "Dog";
    Animal["BIRD"] = "Bird";
})(Animal || (Animal = {}));
var Minnos = {
    inAFamilyOf: Animal.CAT,
    name: 'Minnoş',
    age: 2
};
if (Minnos.inAFamilyOf === Animal.BIRD) {
    console.log('cik cik');
}
if (Minnos.inAFamilyOf === Animal.DOG) {
    console.log('how how');
}
if (Minnos.inAFamilyOf === Animal.CAT) {
    console.log('miyaw miyaw');
}
