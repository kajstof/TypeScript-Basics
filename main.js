"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var facebooklike_1 = require("./facebooklike");
var like_component_1 = require("./like.component");
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
    // console.log('Finally: ' + i);
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
// let endsWithC = msg1.endsWith('c');
var msg2;
msg2 = 'abc';
// let endsWithC21 = (<string>msg2).endsWith('c');
// let endsWithC22 = (msg2 as string).endsWith('c');
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
var point_1 = require("./point");
// import { Point } from '@angular/core';
// let point1 : Point = new Point();
var point1 = new point_1.Point();
var point2 = new point_1.Point(1, 2);
// point2.getX();
// point2.setX(10);
var xx = point2.X;
point2.Y = 10;
var yy = point2.Y;
point2.Y = 10;
point2.draw();
var lb = new facebooklike_1.LikeButton();
console.info(lb.Count);
lb.clickButton();
console.info(lb.Count);
lb.clickButton();
console.info(lb.Count);
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log("LikesCount: " + component.LikesCount + " | IsSelected: " + component.IsSelected);
