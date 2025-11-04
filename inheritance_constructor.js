class Animal{
    constructor(name){
        this.name=name
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
}
class Dog extends Animal{
    constructor(name,bread){
        super(name)
        this.bread=bread
    }
    bark(){
        console.log(`${this.name} is barking`)
    }
}
const dog=new Dog("Tommy","Labrador")
dog.eat()
dog.bark()