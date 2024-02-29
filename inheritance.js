class Animal {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(val) {
        if(typeof val === 'string'){
            this._name = val;
        }
        else{
            throw new TypeError("name should be string");
        }
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
}

animal = new Animal("mee");
console.log(animal.name);

animal.name = "moo";
console.log(animal.name);

cat = new Cat("jacob");
console.log(cat.name);

cat.name = "kyle";
console.log(cat.name);

console.log(cat instanceof Animal);
console.log(cat instanceof Cat);

cat.name = 13.2314;
// console.log(cat.name); // Error