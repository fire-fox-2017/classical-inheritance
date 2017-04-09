"use strict"
class Animal{
  constructor (legs,warmBlood) {
    this._num_legs = legs;
    this._is_warm_blooded = warmBlood;
    this._name = 'test';
  }
}
//=======================================================================

class Frog extends Animal{
  constructor (legs,warmBlood) {
    super(legs,warmBlood);
    this._name = 'kodok';
    this._is_warm_blooded = 'dingin';
    this._superpower = new SuperPower();
  }
}

class Bat extends Animal{
  constructor (legs,warmBlood) {
    super(legs,warmBlood);
    this._name = 'codot';
    this._superpower = new SuperPower();
  }
}


class Chimpanzee extends Animal{
  constructor (legs,warmBlood) {
    super(legs,warmBlood);
    this._name = 'onyet';
    this._num_legs = 4;
    this._superpower = new SuperPower();
  }
}

class Fox extends Animal{
  constructor (legs,warmBlood) {
    super(legs,warmBlood);
    this._name = 'foxie';
    this._superpower = new SuperPower();
  }
}

class Chicken extends Animal{
  constructor (legs,warmBlood) {
    super(legs,warmBlood);
    this._name = 'chicken little';
    this._superpower = new SuperPower();
  }
}
//=======================================================================

class SuperPower {
  use_laser_vision(){
    return 'booom';
  }
  be_invisible(){
    return 'cringgggg';
  }
}
//=======================================================================

let testy = new Animal(100,'au-ah')
let frogie = new Frog (2,'panas');
let batsy = new Bat (2,'panas');
let chimpsy = new Chimpanzee (2,'panas');
let foxy = new Fox (4,'panas');
let chick = new Chicken (2,'panas');
console.log(`Si ${testy._name} kakinya ${testy._num_legs} & berdarah ${testy._is_warm_blooded}`);
console.log(`Si ${frogie._name} kakinya ${frogie._num_legs} & berdarah ${frogie._is_warm_blooded}`);
console.log(`Si ${batsy._name} kakinya ${batsy._num_legs} legs & berdarah ${batsy._is_warm_blooded}`);
console.log(`Si ${chimpsy._name} kakinya ${chimpsy._num_legs} legs & berdarah ${chimpsy._is_warm_blooded}`);
console.log(`Si ${foxy._name} kakinya ${foxy._num_legs} legs & berdarah ${foxy._is_warm_blooded}`);
console.log(`Si ${chick._name} kakinya ${chick._num_legs} legs & berdarah ${chick._is_warm_blooded}`);

//=======================================================================

console.log(frogie._superpower.be_invisible());
console.log(frogie._superpower.use_laser_vision());
