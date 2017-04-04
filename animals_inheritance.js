"use strict"


class Animal{
  constructor(legs, is_warm_blooded){
    this._numlegs = legs;
    this._is_warm_blooded = is_warm_blooded;
  }

  setNumLegs(legs){
    return this._numlegs = legs;
  }
}

class Frog extends Animal{
  constructor(legs, is_warm_blooded){
      super(legs, is_warm_blooded)
      this._superPower = new SuperPower();
  }
}

class Bat extends Animal{
  constructor(legs, is_warm_blooded){
      super(legs, is_warm_blooded)
      this._superPower = new SuperPower();
  }

  get parent(){
    return this._parent
  }
}

class Chimpanze extends Animal{
  constructor(legs, is_warm_blooded){
      super(legs, is_warm_blooded)
      this._superPower = new SuperPower();
  }
}

class Fox extends Animal{
  constructor(legs, is_warm_blooded){
      super(legs, is_warm_blooded)
      this._superPower = new SuperPower();
  }
}

class Chicken extends Animal{
  constructor(legs, is_warm_blooded){
      super(legs, is_warm_blooded)
      this._superPower = new SuperPower();
  }
}

class SuperPower{
  constructor(){
  }


  be_invisible(){
    return console.log(`Binatang bisa menghilang`);
  }
}


let batman = new Bat(2, 'warm');
batman._superPower.be_invisible();
//console.log(batman.parent().this._numlegs);
