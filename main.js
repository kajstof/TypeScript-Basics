// TypeScript == JavaScript
function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
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
var aa;
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
