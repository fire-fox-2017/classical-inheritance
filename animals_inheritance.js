"use strict"

class Animal{
  constructor(data){
    this._numLegs = data.numLegs;
    this._isWarmBlood = data.isWarmBlood;
    this.super = new SuperPower();
  }
  numLegs(){
    return this._numLegs;
  }
}


class Frog extends Animal{
  constructor(data){
    super(data)
  }
  get numLegs(){
    return `Jumlah kaki frog ${super.numLegs()}`
  }
}

class Rhino extends Animal{
  constructor(data){
    super(data)
  }
  get numLegs(){
    return `Jumlah kaki Rhino ${super.numLegs()}`
  }
}

class OrangUtan extends Animal{
  constructor(data){
    super(data)
  }
  get numLegs(){
    return `Jumlah kaki Orang Utan ${super.numLegs()}`
  }
}


class SuperPower{

  frogPower(){
    return 'Jurus lidah menjulur hancurkan bumi'
  }
  rhinoPower(){
    return 'Jurus tanduk menerjang bukit'
  }
  orangUtanPower(){
    return 'Jurus tangan merangkul bumi'
  }
}

let data = {
  numLegs : 4,
  isWarmBlood : true
}

let data2 = {
  numLegs : 4,
  isWarmBlood : true
}

let data3 = {
  numLegs : 2,
  isWarmBlood : true
}

let frogMan  = new Frog(data);
let rhino  = new Rhino(data2);
let orangUtan  = new OrangUtan(data3);

console.log(frogMan.numLegs)
console.log(rhino.numLegs)
console.log(orangUtan.numLegs)
console.log(frogMan.super.frogPower())
console.log(rhino.super.rhinoPower())
console.log(frogMan.super.orangUtanPower())
