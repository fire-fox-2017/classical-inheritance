"use strict"
class Animal {
    constructor(name) {
        this.newName = name
    }

    doSomething() {
        console.log("I'm a " + this.newName);
    }
}

// ================================================================================================


class SuperPower {
    constructor() {

    }
    use_laser_vision() {
        console.log(`I am a wild animal`);
    }
}

class Frog extends Animal {
    constructor(name, leg, blood) {
        super(name)
        this._name = name
        this._leg = leg
        this._blood = blood
        this._superpower = new SuperPower()
    }

    doSomething() {
        super.doSomething();
        console.log(`I have ${this._leg} legs.`)
    }

    is_warm_blooded() {
        console.log(`${this.newName} is ${this._blood}`);
    }
}

let frog = new Frog("Frog", 4, 'cold')
frog.doSomething()
frog.is_warm_blooded()
frog._superpower.use_laser_vision()

// ================================================================================================

class Bat extends Animal {
    constructor(name, leg, blood) {
        super(name)
        this._leg = leg
        this._blood = blood
        this._superpower = new SuperPower()
    }

    doSomething() {
        super.doSomething();
        console.log(`I have ${this._leg} legs.`);
    }

    is_warm_blooded() {
        console.log(`${this.newName} is ${this._blood}`);
    }
}

let bat = new Bat("Bat", 2, 'cold')
bat.doSomething()
bat.is_warm_blooded()
bat._superpower.use_laser_vision()

// ================================================================================================

class Chimpanzee extends Animal {
    constructor(name, leg, blood) {
        super(name)
        this._leg = leg
        this._blood = blood
        this._superpower = new SuperPower()
    }

    doSomething() {
        super.doSomething();
        console.log(`I have ${this._leg} legs.`);
    }

    is_warm_blooded() {
        console.log(`${this.newName} is ${this._blood}`);
    }
}

let chimpanzee = new Chimpanzee("Chimpanzee", 4, 'warm')
chimpanzee.doSomething()
chimpanzee.is_warm_blooded()
chimpanzee._superpower.use_laser_vision()

// ================================================================================================

class Fox extends Animal {
    constructor(name, leg, blood) {
        super(name)
        this._leg = leg
        this._blood = blood
        this._superpower = new SuperPower()
    }

    doSomething() {
        super.doSomething();
        console.log(`I have ${this._leg} legs.`);
    }

    is_warm_blooded() {
        console.log(`${this.newName} is ${this._blood}`);
    }
}

let fox = new Fox("Fox", 4, 'warm')
fox.doSomething()
fox.is_warm_blooded()
fox._superpower.use_laser_vision()

// ================================================================================================
