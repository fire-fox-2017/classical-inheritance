"use strict"
class Animals{
  constructor(components){
    this.Name = ""
      if(components.hasOwnProperty("Name")){
        this.Name = components ["Name"]}

    this.Health = 0
      if(components.hasOwnProperty("Health")){
        this.Health = components ["Health"]}

    this.Atk = 0
      if(components.hasOwnProperty("Atk")){
        this.Atk = components ["Atk"]}

    this.Def = 0;
      if(components.hasOwnProperty("Def")){
        this.Def = components ["Def"]}

    this.Spd = 0;
      if(components.hasOwnProperty("Spd")){
        this.Spd = components ["Spd"]}
      }
  }


class SuperPower{
  constructor(){
  }

eat(){
  console.log(`Health + 20 / turn for 2 turns`)
}

Might(){
  console.log (`ATK + 50%`)
  }
}

class dog extends Animals{
    constructor(components){
      super(components)
      this.superpower = new SuperPower();
    }

bite(){
  console.log("DOG USE BITE!! deal 40 damage")
  }
}

class bat extends Animals {
  constructor(components){
    super(components)
  }

agility(){
  console.log("BAT USE AGILITY!! all ally animals gain +20 Speed for 2 turns")
  }
}

class frog extends Animals {
  constructor(components){
    super(components)
  }

poison(){
  console.log("FROG USE POISON!! all enemy animals are poisoned (-10 hp / turn")
  }
}

class elephant extends Animals {
  constructor(components){
    super(components)
    this.superpower = new SuperPower();
  }

wall(){
  console.log("Elephant took a defensive state! all enemies attacks are blocked for 1 turn")
  }
}
var Dog = new dog({Name: "Dog", Health: 70, Atk: 25, Def: 30, Spd: 20 });
var Bat = new bat({Name: "Bat", Health: 45, Atk: 5, Def: 10, Spd: 100 });
var Frog = new frog({Name: "Frog", Health: 60, Atk: 15, Def: 5, Spd: 60 });
var Elephant = new elephant({Name: "Elephant", Health: 150, Atk: 5, Def: 80, Spd: 5 });

console.log(Dog)
Dog.bite()
console.log(Bat)
Bat.agility()
console.log(Frog)
Frog.poison()
console.log(Elephant)
Elephant.wall()
Dog.superpower.Might();
Elephant.superpower.eat();
