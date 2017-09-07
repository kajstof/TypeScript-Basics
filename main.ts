// TypeScript == JavaScript
function log(message){
    console.log(message);
}
var message = 'Hello World';
log(message);

// 'let' keyword
function doSomething() {
    for (let i = 0; i< 5; i++){
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();

// 'let' is statically types
let count = 5;
let aa: number
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
