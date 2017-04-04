"use strict"
class Animal {
  constructor (num_legs, is_warm_blooded) {
    this.num_legs = num_legs
    this.is_warm_blooded = is_warm_blooded
  }
}

class Frog extends Animal {
  constructor(num_legs, is_warm_blooded){
    super(num_legs, is_warm_blooded)
    this.superpower = new SuperPower()
  }
}

class Bat extends Animal {
  constructor(num_legs, is_warm_blooded){
    super(num_legs, is_warm_blooded)
    this.superpower = new SuperPower()
  }
}

class Chimpanzee extends Animal {
  constructor(num_legs, is_warm_blooded){
    super(num_legs, is_warm_blooded)
    this.superpower = new SuperPower()
  }
}

class Fox extends Animal {
  constructor(num_legs, is_warm_blooded){
    super(num_legs, is_warm_blooded)
    this.superpower = new SuperPower()
  }
}

class Chicken extends Animal {
  constructor(num_legs, is_warm_blooded){
    super(num_legs, is_warm_blooded)
    this.superpower = new SuperPower()
  }
}

class SuperPower {
  constructor(){

  }
  use_laser_vision(){
    console.log("BZZZZZZ!!!")
  }
  be_invisible(){
    console.log("I can\'t see you!!!")
  }
}

var a = new Fox(4,true)
a.superpower.use_laser_vision()
