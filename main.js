// TypeScript == JavaScript
function log1(message) {
    console.log(message);
}
var message1 = 'Hello World';
log1(message1);
// 'let' keyword
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
// 'let' is statically types
var count = 5;
var aa; // let aa;
aa = 1;
aa = true;
aa = 'a';
// 'let' strong typed declaration
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
// Enum in JavaScript
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// 'enum' keyword in TranScript
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
// Type assertion
var msg1 = 'abc';
var endsWithC = msg1.endsWith('c');
var msg2;
msg2 = 'abc';
var endsWithC21 = msg2.endsWith('c');
var endsWithC22 = msg2.endsWith('c');
// Arrow functions
var log2 = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
var doSth = function () { return console.log(); };
// Interfaces
var drawPoint1 = function (point) { };
drawPoint1({ x: 1, y: 2 });
var drawPoint2 = function (point) { };
var getDistance = function (pointA, pointB) { };
// Claseses
var Point = /** @class */ (function () {
    // private x: number;
    // private y: number;
    function Point(x, y) {
        this.x = x;
        this.y = y;
        // this.x = x;
        // this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Object.defineProperty(Point.prototype, "X", {
        // getX() { return this.x; }
        // setX(value) {
        //     if (value < 0) {
        //         throw new Error('value cannot be less than 0.')
        //     }
        //     this.x = value;
        // }
        get: function () { return this.x; },
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0.');
            }
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "Y", {
        get: function () { return this.y; },
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0.');
            }
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.getDistance = function (another) { };
    return Point;
}());
var point1 = new Point();
var point2 = new Point(1, 2);
// point2.getX();
// point2.setX(10);
var xx = point2.X;
point2.Y = 10;
var yy = point2.Y;
point2.Y = 10;
point2.draw();
