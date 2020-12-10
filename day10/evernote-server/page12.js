function performOperation(shape) {
    shape.draw();
    shape.erase();
}
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.erase = function () {
        console.log('rectangle is getting erased');
    };
    Rectangle.prototype.draw = function () { console.log('rectangle is getting drawn'); };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.erase = function () { console.log('cirle is getting erased'); };
    Circle.prototype.draw = function () { console.log('circle is getting drawn'); };
    return Circle;
}());
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.erase = function () { console.log('square is getting erased'); };
    Square.prototype.draw = function () { console.log('square is getting drawn'); };
    return Square;
}());
var R1 = new Rectangle();
performOperation(R1);
var c1 = new Circle();
performOperation(c1);
var s1 = new Square();
performOperation(s1);
