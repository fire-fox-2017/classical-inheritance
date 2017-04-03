"use strict"

// Release 0 : a Bunch of Animals
class Animal {
  constructor(name) {
    this.name = name;
    this.is_warm_blooded = true;
    this.num_legs = 4;
  }

  eats() {
    console.log("nom nom nom");
  }

}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.super_power = new SuperPower(name);
  }

  eats() {
    super.eats();
  }

}

class Bird extends Animal {
  constructor(name) {
    super(name);
    this.super_power = new SuperPower(name);
  }

  eats() {
    super.eats();
  }

  setNumLegs(num_legs) {
    this.num_legs = num_legs;
    console.log(`${this.name} has ${this.num_legs} legs, and happily running!`);
  }

}


// Release 1: Super Powered Animals
class SuperPower {
  constructor(name) {
    this.name = name;
  }
  use_laser_vision() {
    console.log(`${this.name} uses laser vision without any reasons!`);
  }
  be_invisible() {
    console.log(`${this.name} is invisible and starts doing pranks!`);
  }
}

// Driver code
let kucing = new Cat('kucing');
console.log(kucing.name);
console.log(kucing.is_warm_blooded);
let bebek = new Bird('bebek');
console.log(bebek.is_warm_blooded);
bebek.eats();
bebek.setNumLegs(2);
console.log(bebek.num_legs);
kucing.super_power.use_laser_vision();
bebek.super_power.be_invisible();
