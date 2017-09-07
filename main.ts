// TypeScript == JavaScript
function log1(message) {
    console.log(message);
}
var message1 = 'Hello World';
log1(message1);

// 'let' keyword
function doSomething() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();

// 'let' is statically types
let count = 5;
let aa : any; // let aa;
aa = 1;
aa = true;
aa = 'a';

// 'let' strong typed declaration
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

// Enum in JavaScript
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

// 'enum' keyword in TranScript
enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3 };
let backgroundColor = Color.Blue;

// Type assertion
let msg1 = 'abc';
let endsWithC = msg1.endsWith('c');
let msg2;
msg2 = 'abc';
let endsWithC21 = (<string>msg2).endsWith('c');
let endsWithC22 = (msg2 as string).endsWith('c');

// Arrow functions
let log2 = function (message) {
    console.log(message);
}
let doLog = (message) => console.log(message);
let doSth = () => console.log();

// Interfaces
let drawPoint1 = (point: { x: number, y: number }) => { /* .... */ }
drawPoint1({ x: 1, y: 2 })
interface IPoint {
    x: number,
    y: number,
    draw: () => void
}
let drawPoint2 = (point: IPoint) => { /* ... */ }
let getDistance = (pointA: IPoint, pointB: IPoint) => { /* ... */ }

// Claseses
class Point {
    // private x: number;
    // private y: number;
    constructor(private x?: number, private y?: number) {
        // this.x = x;
        // this.y = y;
    }
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    // getX() { return this.x; }
    // setX(value) {
    //     if (value < 0) {
    //         throw new Error('value cannot be less than 0.')
    //     }
    //     this.x = value;
    // }
    get X() { return this.x; }
    set X(value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0.')
        }
        this.x = value;
    }
    get Y() { return this.y; }
    set Y(value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0.')
        }
        this.x = value;
    }
    getDistance(another: Point) { /* ... */ }
}
let point1 = new Point();
let point2 = new Point(1, 2);
// point2.getX();
// point2.setX(10);
let xx = point2.X;
point2.Y = 10;
let yy = point2.Y;
point2.Y = 10;
point2.draw();