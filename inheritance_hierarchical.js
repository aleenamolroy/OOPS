class Animal{
    constructor(name,food){
        this.name=name
        this.food=food
    }
    eat(){
         console.log(`${this.name} is eating ${this.food}`);
    }
}
class Dog extends Animal{
    bark(){
        console.log("Barking...")
    }
}
class Cat extends Animal{
    constructor(name,food,sound){
        super(name,food)
        this.sound=sound
    }
    
    Cry(){
        console.log(`${this.name}'s sound is ${this.sound}`);
        
    }
}
class Rat extends Animal{
    constructor(name,food){
        super(name,food)
    }
    Look(){
        console.log(`${this.name} is small`)
    }
}
const d=new Dog('dog','chicken')
const c=new Cat('cat','milk','meow')
const r=new Rat('rat','chees')
d.eat()
d.bark()
c.eat()
c.Cry()
r.eat()
r.Look()