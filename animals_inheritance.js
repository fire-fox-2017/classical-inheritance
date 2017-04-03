"use strict"
class Animal{
  constructor(args){
    this._name=args['name'];
    this._color=args['color'];
    this.sound='Ciiiaaattttttt';
  }
  speak(){
    return this.sound;
  }
  setSpeak(str){
    this.sound=str;
  }
  get name(){
    return this._name;
  }
  get color(){
    return this._color;
  }
}

class SuperPower{
  constructor(args){
    this._special=args["special"];
    this.skills=[];
  }
  addSkills(str){
    this.skills.push(str);
  }
  getSkills(){
    return this.skills;
  }
  get special(){
    return this._special;
  }
}

class Frog extends Animal{
  constructor(args){
    super(args);
  }
  speak(str){
    let myPower=new SuperPower({special:"Jump Attack"});
    myPower.addSkills("Long Range Attack");
    myPower.addSkills("Swiming in Dark");
    myPower.addSkills("Regenaration");
    console.log("I am Frog, My name "+super.name+" or "+super.color+" Frog.");
    console.log("Default my sound "+super.speak());
    console.log("I change my sound");
    super.setSpeak(str);
    console.log("to : "+super.speak());
    console.log("My special power "+myPower.special);
    console.log("And my skills : "+myPower.getSkills());
  }
}

class Fox extends Animal{
  constructor(args){
    super(args);
  }
  speak(str){
    let myPower=new SuperPower({special:"Run Attack"});
    myPower.addSkills("Increas Speed");
    myPower.addSkills("Ilusion arms");
    myPower.addSkills("Not Effect");
    console.log("I am Fox, My name "+super.name+" or "+super.color+" Fox.");
    console.log("Default my sound "+super.speak());
    console.log("I change my sound");
    super.setSpeak(str);
    console.log("to : "+super.speak());
    console.log("My special power "+myPower.special);
    console.log("And my skills : "+myPower.getSkills());
  }
}

class Cat extends Animal{
  constructor(args){
    super(args);
  }
  speak(str){
    let myPower=new SuperPower({special:"Agresife Moving"});
    myPower.addSkills("Sound Damage");
    myPower.addSkills("Liability Effect");
    myPower.addSkills("Stunt Enemy");
    console.log("I am Cat, My name "+super.name+" or "+super.color+" Cat.");
    console.log("Default my sound "+super.speak());
    console.log("I change my sound");
    super.setSpeak(str);
    console.log("to : "+super.speak());
    console.log("My special power "+myPower.special);
    console.log("And my skills : "+myPower.getSkills());
  }
}

class Bird extends Animal{
  constructor(args){
    super(args);
  }
  speak(str){
    let myPower=new SuperPower({special:"Sky Defence"});
    myPower.addSkills("Fire Damage");
    myPower.addSkills("Multiply Attack");
    myPower.addSkills("Miss Deffence");
    console.log("I am Bird, My name "+super.name+" or "+super.color+" Bird.");
    console.log("Default my sound "+super.speak());
    console.log("I change my sound");
    super.setSpeak(str);
    console.log("to : "+super.speak());
    console.log("My special power "+myPower.special);
    console.log("And my skills : "+myPower.getSkills());
  }
}

let myFrog= new Frog({
  name: "James",
  color:"Green"
});
let myFox= new Fox({
  name: "Fire",
  color:"Red"
});
let myCat= new Fox({
  name: "Kitty",
  color:"White"
});
let myBird= new Fox({
  name: "Flappy",
  color:"Blue"
});

myFrog.speak("Krooakk Kroakkkk");
console.log("");
myFox.speak("Arrgggg Argggggg");
console.log("");
myCat.speak("Meowww Meoowww");
console.log("");
myBird.speak("Cittt Cittttt");
