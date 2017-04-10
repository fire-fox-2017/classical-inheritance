"use strict"

class Animal{

  constructor(karakteristik){
    this.jumKaki =karakteristik["kaki"];
    this.berdarahPanas=karakteristik["darah"];
    this.jenis = karakteristik["jenis"];
  }

  tampilAnimal()
  {
    if(this.berdarahPanas===true)
    console.log(`berkaki ${this.jumKaki} dan berdarah panas`)
    else
    console.log(`berkaki ${this.jumKaki} dan berdarah panas`)

    console.log(`jenis hewan ${this.jenis}`)
  }

}

export default Animal
