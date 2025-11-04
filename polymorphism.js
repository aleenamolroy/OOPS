class shape{
    draw(){
        console.log("draw a shape..");
        
    }
}
class circle extends shape{
    draw(){
        console.log("Drawing circle..")
    }
}
class Rectangle extends shape{
    draw(){
        console.log('Drawing Rectangle..');
        
    }
}
class triangle extends shape{
    draw(){
        console.log('Drawing Triangle..')
    }
}
const shapes=[new circle(),new Rectangle(),new triangle()]
for(let s of shapes){
    s.draw()
}
