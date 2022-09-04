enum Role {
  ADMIN,
  AUTHOR,
  MODERATOR,
}

class User {
  private role;
  constructor(role: Role) {
    this.role = role;
  }
}

const users: User[] = [];

users[0] = new User(Role.MODERATOR);

enum Animal {
  CAT = "Cat",
  DOG = "Dog",
  BIRD = "Bird",
}

const Minnos = {
    inAFamilyOf: Animal.CAT,
    name: 'Minnoş',
    age: 2
}

if (Minnos.inAFamilyOf === Animal.BIRD) {
    console.log('cik cik')
}

if (Minnos.inAFamilyOf === Animal.DOG) {
    console.log('how how')
}

if (Minnos.inAFamilyOf === Animal.CAT) {
    console.log('miyaw miyaw')
}
