"use strict"

class Animal {
  constructor (name) {
    this.name = name;
    this.num_legs = 2;
    this.is_warm_blooded = false;
  }

  sound () {
    console.log("Hohohoho");
  }
}

class Frog extends Animal {
  constructor (name) {
    super(name);
    this.num_legs = 4;
    this.is_warm_blooded = false;
    this.superpower = new Superpower(name);
  }

  sound () {
    console.log("Kretek-kretek");
  }
}

class Bat extends Animal {
  constructor (name) {
    super(name);
    this.num_legs = 2;
    this.is_warm_blooded = true;
    this.superpower = new Superpower(name);
  }

  sound () {
    console.log("Citcitcit");
  }
}

class Snake extends Animal {
  constructor (name) {
    super(name);
    this.num_legs = 0;
    this.is_warm_blooded = false;
    this.superpower = new Superpower(name);
  }

  sound () {
    console.log("Shhhhh-shhhhh");
  }
}

class Chiken extends Animal {
  constructor (name) {
    super(name);
    this.num_legs = 2;
    this.is_warm_blooded = true;
    this.superpower = new Superpower(name);
  }

  sound () {
    console.log("Kokkokkok");
  }
}

class Fox extends Animal {
  constructor (name) {
    super(name);
    this.num_legs = 4;
    this.is_warm_blooded = true;
    this.superpower = new Superpower(name);
  }

  sound () {
    console.log("Rarara'a'aa-romaromamaa");
  }
}

class Superpower {
  constructor (name) {
    this.name = name;
  }

  use_laser_vision () {
    return `${this.name} now uses laser vision, Babe`
  }

  be_invisible () {
    return `${this.name} can not be seen, coz it is invisible`
  }
}

// Driver
let animal = new Animal("Bae");
console.log(`Animal ${animal.name} has ${animal.num_legs} legs`);
console.log(`Is animal warm-blooded?  ${animal.is_warm_blooded}`);
animal.sound();
let frog = new Frog("Froggy");
console.log (`Frog ${frog.name} has ${frog.num_legs} legs`);
frog.sound();
console.log(frog.superpower.use_laser_vision());
let snake = new Snake("Eve-persuader");
console.log (`Snake ${snake.name} has ${snake.num_legs} legs`);
console.log(snake.superpower.be_invisible());
console.log(snake.superpower.use_laser_vision());
let fox = new Fox("Indonesian Candy");
console.log(`Is fox warm-blooded?  ${fox.is_warm_blooded}`);
fox.sound();
console.log(fox.superpower.be_invisible());
