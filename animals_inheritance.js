"use strict"

class Animal {
  constructor(name, numLegs) {
    this.numLegs = numLegs || 2;
    this.name = name || 'Binatang';
  }
}

class Chimpanzee extends Animal {
  constructor(name, numLegs) {
    super(name, numLegs);
    this.superPower = new SuperPower('Simpanse');
  }
}

class Frog extends Animal {
  constructor(name, numLegs) {
    super(name, numLegs);
    this.superPower = new SuperPower('Kodok');
  }
}

class Duck extends Animal {
  constructor(name, numLegs) {
    super(name, numLegs);
    this.superPower = new SuperPower('Bebek');
  }
}

class Chicken extends Animal {
  constructor(name, numLegs) {
    super(name, numLegs);
    this.superPower = new SuperPower('Ayam');
  }
}

class SuperPower extends Animal {
  constructor(name) {
    super(name);
  }

  laserVision() {
    console.log(`${this.name} mengeluarkan sinar laser!`);
  }

  bigSize() {
    console.log(`${this.name} berubah menjadi raksasa!`);
  }

  longTongue() {
    console.log(`${this.name} memiliki lidah panjang!`);
  }

  flying() {
    console.log(`${this.name} sekarang sudah bisa terbang!`);
  }
}

let myChicken = new Chicken('Ayam');
let myChimp = new Chimpanzee('Simpanse');
let myFrog = new Frog('Kodok');
let myDuck = new Duck('Bebek');

myChicken.superPower.laserVision();
myChimp.superPower.bigSize();
myFrog.superPower.longTongue();
myDuck.superPower.flying();


