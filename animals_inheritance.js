"use strict"
class Animal {
  constructor(name, domesticated, num_legs) {
    this.name = name;
    this.domesticated = domesticated
    this.num_legs = num_legs
  }
  move (){
    return console.log("This animal is moving");
  }
}

class Cat extends Animal {
  constructor(name, domesticated, num_legs, has_tail, has_fur) {
    super(name, domesticated, num_legs);
    this.has_tail = has_tail;
    this.has_fur = has_fur;
  }
}

class Eagle {
  constructor(name, domesticated, num_legs, is_flying) {
    super(name, domesticated, num_legs);
    this.is_flying = is_flying;
  }
}

class SuperPower {
  constructor() {
  }
  use_laser_vision(){
    return console.log('${this.name} use lser vision')
  }

  use_fast_healing(){
    return console.log('${this.name} use fast healing')
  }
}

let Eagl = new Eagle(false, 0, true);
Eagl.move;
