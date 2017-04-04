"use strict"

class Animal{
  constructor(name,num_legs){
    this.name = name;
    this.num_legs = num_legs;
  }
}

class Fox extends Animal{
  constructor(name,num_legs,blood){
    super(name,num_legs)
    this.warm_blood = 'cold';
    this.power = new SuperPower();
  }
}

class Chicken extends Animal{
  constructor(name,num_legs,blood){
    super(name,num_legs)
    this.warm_blood = blood;
    this.power = new SuperPower();
  }
}

class SuperPower{
  constructor(){

  }
  use_laser_vision(){
    return "Laser";
  }
  be_invisible(){
    return "Invisible";
  }
}

let fox = new Fox('Foxes',4)
let chick = new Chicken('Chick',2)
console.log(`${fox.name} , ${fox.num_legs}, ${fox.warm_blood}, ${fox.power.use_laser_vision()}`);
console.log(`${chick.name} , ${chick.num_legs}, ${chick.warm_blood}, ${chick.power.use_laser_vision()}`);
