let canEat= {
    eat(){console.log("Eating")}
}
let canWalk={
    walk(){
        console.log("Walking..")
    }
}
class Person{}
Object.assign(Person.prototype,canEat,canWalk)
const p=new Person()
p.eat()
p.walk()