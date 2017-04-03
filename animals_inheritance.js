// //v1

"use strict"

class Animal{
    constructor(namaHewan){
      this.namaHewan = namaHewan;
    }

    print(){
      console.log(`Saya adalah hewan : ${this.namaHewan}`);
    }
}

class Frog extends Animal{
  constructor(namaHewan, jumlahKaki){
    super(namaHewan);
    this._jumlahKaki = jumlahKaki;
  }
  print(){
    console.log(`Saya adalah hewan : ${this.namaHewan} berkaki : ${this._jumlahKaki}`);
  }
}

class Bat extends Animal{
  constructor(namaHewan, jumlahKaki){
    super(namaHewan);
    this._jumlahKaki = jumlahKaki;
  }

  print(){
    console.log(`Saya adalah hewan : ${this.namaHewan} berkaki : ${this._jumlahKaki}`);
  }
}

let frog1 = new Frog('Frog 1',4);
frog1.print();

let bat1 = new Bat('Bat 1',2);
bat1.print();

// v2

"use strict"

class Animal{
    constructor(namaHewan){
      this.namaHewan = namaHewan;
      this.jumlahKaki = 2;
    }

    print(){
      console.log(`Saya adalah hewan : ${this.namaHewan}`);
    }
}

class Frog extends Animal{
  constructor(namaHewan, jumlahKaki){
    super(namaHewan,jumlahKaki);
    this.jumlahKaki = 4;
    this.kekuatanSuper = new SuperPower(namaHewan);
  }

  print(){
    console.log(`Saya adalah hewan : ${this.namaHewan} berkaki : ${this.jumlahKaki}`);
  }
}

class Bat extends Animal{
  constructor(namaHewan, jumlahKaki){
    super(namaHewan, jumlahKaki);
    this.jumlahKaki = 2;
    this.kekuatanSuper = new SuperPower(namaHewan);
  }

  print(){
    console.log(`Saya adalah hewan : ${this.namaHewan} berkaki : ${this.jumlahKaki}`);
  }
}

class SuperPower{
  constructor(nama){
    this.nama = nama;
  }
  use_laser_vision(){
    console.log(`Hewan ${this.nama} mampu mengelurkan sinar laser infra merah`);
  }

  be_invisible(){
    console.log(`Hewan ${this.nama} mampu berkamuflase dengan baik`);
  }

}

let frog1 = new Frog('Frog 1');
frog1.print();
frog1.kekuatanSuper.be_invisible();

let bat1 = new Bat('Bat 1');
bat1.print();
bat1.kekuatanSuper.use_laser_vision();
