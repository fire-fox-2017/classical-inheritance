"use strict"
class Animal {
  constructor ( args ) {
    this.num_legs = 2;
    if (args.hasOwnProperty('num_legs'))
      this.num_legs = args['num_legs'];

    this.is_warm_blooded = true;
    if (args.hasOwnProperty('is_warm_blooded'))
      this.is_warm_blooded = args['is_warm_blooded'];
  }

  to_s() {
    return `number of legs = ${this.num_legs}, is warm blooded = ${this.is_warm_blooded}`;
  }

}

class SuperPower {
  use_laser_vision () {
    console.log("Dor!");
  }

  be_invisible () {
    console.log("*puff* (.....invisible....)");
  }
}

class Dog extends Animal {
    constructor (args) {
      super(args);

      this.name = "No Name";
      if (args.hasOwnProperty('name'))
        this.name = args['name'];

    }

    returnName () {
      return this.name;
    }

    bark () {
      console.log("Woof! Woof!");
    }
}

class Chicken extends Animal {
  constructor (args) {
    super (args)
    this.superpower = new SuperPower();
  }

}

var dog = new Dog({num_legs: 4, is_warm_blooded: true, name: "bryan"});

console.log(dog);
console.log(dog.to_s());
dog.bark();
console.log(dog.returnName());

var chick = new Chicken({num_legs: 2, is_warm_blooded: true});
chick.superpower.use_laser_vision();
chick.superpower.be_invisible();
