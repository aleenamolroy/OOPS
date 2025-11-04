class Vehicle{
    start(){
        console.log("Starting vehicle....")
    }
}
class Car extends Vehicle{
    drive(){
        console.log("Car is moving..")
    }
}
const c1=new Car()
c1.start()
c1.drive()
