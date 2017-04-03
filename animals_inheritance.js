"use strict"
class Animal{
	constructor(data){
		this._num_legs = data.num_legs
		this._is_warm_blooded = data.is_warm_blooded
		this._super_power = new SuperPower()
	}

}

class Frog extends Animal{
	constructor(data){
		super(data)
		this._num_legs = data.num_legs
		this._is_warm_blooded = data.is_warm_blooded
	}
	get num_legs(){
		return this._num_legs
	}
}

class Bat extends Animal{
	constructor(data){
		super(data)
		this._num_legs = data.num_legs
		this._is_warm_blooded = data.is_warm_blooded
	}
	get num_legs(){
		return this._num_legs
	}
}

class Chimpanzee extends Animal{
	constructor(data){
		super(data)
		this._num_legs = data.num_legs
		this._is_warm_blooded = data.is_warm_blooded
	}
	get num_legs(){
		return this._num_legs
	}
}

class SuperPower{
	jump_long(){
		return 'Jump Longgg Wusss !!'
	}
	fly_fire(){
		return 'Flying with Fire !!'
	}
	shoot_boom(){
		return 'Shooting Boom!!'
	}
}

let frog = {
	num_legs : 4,
	is_warm_blooded : true
}
let bat = {
	num_legs : 2,
	is_warm_blooded : true
}
let chimpanzee = {
	num_legs : 2,
	is_warm_blooded : true
}

let froggy = new Frog(frog)
let batman = new Bat(bat)
let sungokong = new Chimpanzee(chimpanzee)

console.log(`Froggy has ${froggy.num_legs} legs and has super power is ${froggy._super_power.jump_long()}`)
console.log(`Batman has ${batman.num_legs} legs and has super power is ${batman._super_power.fly_fire()}`)
console.log(`Sungokong has ${sungokong.num_legs} legs and has super power is ${sungokong._super_power.shoot_boom()}`)