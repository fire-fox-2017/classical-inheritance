"use strict"
class Animals {
  constructor(nama, kaki, makanan, berkembangBiak, tipeKulit, hidupDi) {
    this.animal = nama
    this.leg = kaki
    this.foods = makanan
    this.breed = berkembangBiak
    this.skin = tipeKulit
    this.live = hidupDi
  }
}

class Sapi extends Animals {
  constructor() {
    super('sapi', 4, 'herbivora', 'vivipar', 'berambut', 'darat')
  }
}

class Macan extends Animals {
  constructor() {
    super('macan', 4, 'karnivora', 'vivipar', 'berambut', 'darat')
  }
}

class Ayam extends Animals {
  constructor() {
    super('ayam', 2, 'omnivora', 'ovipar', 'berbulu', 'darat')
    this.superpower = new SuperPower(this.animal)
  }
}

class Ikan extends Animals{
  constructor() {
    super('ikan',0,'omnivora','ovipar','bersisik','air');
    this.superpower = new SuperPower(this.animal)
  }
}

class SuperPower {
  constructor(hewan){
    this.name = hewan
  }
  use_laser_vision(){
    return `${this.name} mengaktifkan penglihatan lasernya!`
  }
  be_invisible(){
    return `${this.name} menggunakan kekuatan supernya agar tidak terlihat oleh pemburu!`
  }
  terbang(){
    return `${this.name} bisa terbang di indosiar`
  }
}
let ayam = new Ayam();

let harimau = new Harimau();


console.log(ayam.superpower.use_laser_vision())
//console.log(superHarimau.be_invisible())
