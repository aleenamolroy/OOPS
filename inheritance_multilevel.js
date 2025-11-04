class Vehicle{
    start(){
        console.log('This is a vehicle');
        
    }
}
class FourWheeler extends Vehicle{
    New(){
        console.log('4 wheeler vehicle');
    }    
}
class Car extends FourWheeler{
    car(){
        console.log("Car is a 4 wheeler vehicle");
        
    }
}
const c1=new Car()
c1.start()
c1.New()
c1.car()
const v1=new FourWheeler()
v1.start()
v1.New()
// v1.car()