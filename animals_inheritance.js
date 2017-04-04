"use strict"

class Animals {
  constructor (name,numlegs,is_warm_blooded){
    this.name = name;
    this.numlegs = numlegs || 2;
    this.is_warm_blooded = is_warm_blooded;
  }

}

class Superpower {
  constructor(name) {
    this.name = name
  }

  use_laser_vision() {
    console.log(`${this.name} uses laser vision`)
  }

  use_invisibility() {
    console.log(`${this.name} uses invisibility`);
  }
}

class Frog extends Animals {
  constructor () {
    super('Frog',4,false)
    this.Superpower = new Superpower('Frog')
  }
  display() {
    if (this.is_warm_blooded) {
      console.log(`${this.name} has ${this.numlegs} legs and is warm blooded`)
    } else {
      console.log(`${this.name} has ${this.numlegs} legs and is cold blooded`)
    }
  }
}

class Fox extends Animals {
  constructor () {
    super('Fox',4,true)
    this.Superpower = new Superpower('Fox')
  }
  display() {
    if (this.is_warm_blooded) {
      console.log(`${this.name} has ${this.numlegs} legs and is warm blooded`)
    } else {
      console.log(`${this.name} has ${this.numlegs} legs and is cold blooded`)
    }
  }
}

let frog = new Frog()
let fox = new Fox()

frog.display()
fox.display()
fox.Superpower.use_laser_vision()
frog.Superpower.use_invisibility()
