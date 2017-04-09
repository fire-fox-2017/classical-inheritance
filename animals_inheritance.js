"use strict"
class Animal {
  constructor(legs,isWarm) {
    this._num_legs = legs;
    this._is_warm_blooded = isWarm;
  }

  get legs(){
    return this._num_legs;
  }

  set legs(legs){
    this._num_legs = legs;
  }

  get blood(){
    return this._is_warm_blooded;
  }

  set blood(blood){
    this._is_warm_blooded = blood;
  }
}

class Frog extends Animal{
  constructor(legs,isWarm,name) {
    super(legs,isWarm);
    this._name = name;
    this.superPower=new SuperPower(this._name);
  }
}

class Bat extends Animal{
  constructor(legs,isWarm,name) {
    super(legs,isWarm);
    this._name = name;
    this.superPower=new SuperPower(this._name);
  }
}

class Fox extends Animal{
  constructor(legs,isWarm,name) {
    super(legs,isWarm);
    this._name = name;
    this.superPower=new SuperPower(this._name);
  }
}

class SuperPower {
  constructor(name) {
    this.name=name;

  }

  use_laser_vision(){
    console.log(`${this.name} BISA NGINTIP!!`);
  }

  be_invisible(){
    console.log(`${this.name} jadi MALING!!`);

  }
}

let binatang = new Animal(3,true);
let kodok = new Frog(2,false,'Budi');
let kelelawar = new Bat(2,false,'Ani');
let rubah = new Fox(4,false,'Susi');
// console.log(binatang)
// console.log(kodok)
kodok.superPower.use_laser_vision()
