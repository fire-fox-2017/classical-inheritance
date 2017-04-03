
"use strict"
class Animals {
  constructor(name) {
    this._name = name;
    this._num_legs = 2;
    }
   ShowName (){
     console.log(`Saya adalah hewan : ${this._name} `);
   }

 }
 //Katak
  class Frog extends Animals {
    constructor(name) {
      super(name);
      this._num_legs = 4;
      this._warm_blodeed = false;
      this.superpower = new SuperPower (name);
    }
    ShowName (){
      console.log(`Saya adalah hewan : ${this._name} dan Jumlah Kaki ${this._num_legs}`);
    }
  }

  //Kelelawar
  class Bat  extends Animals {
    constructor(name) {
      super(name);
      this._num_legs = 2;
      this._warm_blodeed = false;
      this.superpower = new SuperPower (name);
    }
    ShowName (){
      console.log(`Saya adalah hewan : ${this._name} dan Jumlah Kaki ${this._num_legs}`);
    }
  }

  //Simpanse
  class Chimpanzee  extends Animals {
      constructor(name) {
        super(name);
        this._num_legs = 4;
        this._warm_blodeed = true;
        this.superpower = new SuperPower (name);
      }
      ShowName (){
        console.log(`Saya adalah hewan : ${this._name} dan Jumlah Kaki ${this._num_legs}`);
      }
    }


  //rubah
  class Fox  extends Animals  {
      constructor(name) {
        super(name);
        this._num_legs = 4;
        this._warm_blodeed = true;
        this.superpower = new SuperPower (name);
      }
      ShowName (){
        console.log(`Saya adalah hewan : ${this._name} dan Jumlah Kaki ${this._num_legs}`);
      }
    }

  //ayam
  class Chicken  extends Animals {
      constructor(name) {
        super(name);
        this._num_legs = 2;
        this._warm_blodeed = true;
        this.superpower = new SuperPower (name);
      }
      ShowName (){
        console.log(`Saya adalah hewan : ${this._name} dan Jumlah Kaki ${this._num_legs}`);
      }
    }


class SuperPower  {
  constructor(name) {
      this._name = name;
  }

  use_laser_vision() {
  console.log(`${this._name} uses laser vision without any reasons!`);
  }

  be_invisible () {
    console.log(`${this._name} is invisible and starts doing pranks!`);
  }
}


// Driver code
var kucing = new Animals ("Kucing");
kucing.ShowName();
//kucing.superpower.be_invisible();

let frog1 = new Frog('Frog 1');
frog1.ShowName();
frog1.superpower.be_invisible();

let bat1 = new Bat('Bat 1');
bat1.ShowName();
bat1.superpower.use_laser_vision();
