"use strict"

class Animals {
  constructor(name, legs, warm_blood) {
    this._name = name
    this._legs = legs
    this._power = new SuperPower()
  }

  get power(){
    if(this.warm_blood == 'warm'){
      return this._power.use_laser_vision()
    } else {
      return this._power.be_invisible()
    }
  }
  set power(name){
    return name
  }
}

class Foxs extends Animals {
  constructor(name, legs) {
    super(name,legs)
    this.warm_blood = 'cold'
  }
}

class Chimpanzes extends Animals {
  constructor(name,legs) {
    super(name, legs)
    this.warm_blood = 'warm'
  }
}

class Chickens extends Animals {
  constructor(name, legs) {
    super(name,legs)
    this.warm_blood = 'warm'
  }
}

class SuperPower {
  constructor() {

  }

  use_laser_vision(){
    return 'mata penghancur'
  }

  be_invisible(){
    return 'menghilang dari musuh'
  }
}

let chic = new Chickens('chicken', 2)
console.log(`${chic._name} punya ${chic._legs} legs & berdarah ${chic.warm_blood} dan punya kekuatan ${chic.power}`);
console.log('-------------------');
let fox = new Foxs('fox', 4)
console.log(`${fox._name} punya ${fox._legs} legs & berdarah ${fox.warm_blood} dan punya kekuatan ${fox.power}`);
