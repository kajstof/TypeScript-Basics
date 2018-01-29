"use strict";
exports.__esModule = true;
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
exports.Point = Point;
