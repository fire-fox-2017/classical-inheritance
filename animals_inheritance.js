"use strict"
class Animal {
  constructor(name, domesticated, num_legs) {
    this.name = name;
    this.domesticated = domesticated || "true";
    this.num_legs = num_legs;
  }
  move (){
    console.log(`${this.name} is moving`);
  }
}

class Cat extends Animal {
  constructor(name,domesticated, num_legs) {
    //super(name,num_legs);
    super(name);
    this.superPower = new SuperPower(name);
  }
  move(){
    super.move();
  }
}

class Eagle extends Animal {
  constructor(name, domesticated) {
    //super(name, domesticated, num_legs);
    super(name);
    this.superPower = new SuperPower(name);
  }
  move(){
    super.move();
  }
}

class SuperPower {
  constructor(name) {
    this.name = name;
  }
  use_laser_vision(){
    console.log(`${this.name} use laser vision`);
  }

  use_fast_healing(){
    console.log(`${this.name} use fast healing`);
  }
}

let Cate = new Cat("Kat", 4);
console.log(Cate.name);
Cate.move();
console.log(Cate.domesticated);
let Eagl = new Eagle("Elang", false);

Eagl.superPower.use_laser_vision();
Cate.superPower.use_fast_healing();
