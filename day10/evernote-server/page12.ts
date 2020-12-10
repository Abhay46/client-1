interface Shape
{

erase()
draw()
}

function performOperation(shape:Shape)
{
shape.draw()
shape.erase()
}
class Rectangle implements Shape{
erase()
{
console.log('rectangle is getting erased')
}
draw(){console.log('rectangle is getting drawn')}

}

class Circle implements Shape {
erase() { console.log('cirle is getting erased') }
draw() { console.log('circle is getting drawn') }
}

class Square implements Shape {
erase() { console.log('square is getting erased') }
draw() { console.log('square is getting drawn') }
}



const R1=new Rectangle()
performOperation(R1)



const c1 = new Circle()
performOperation(c1)

const s1 = new Square()
performOperation(s1) 