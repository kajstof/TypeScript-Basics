"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    // private x: number;
    // private y: number;
    // constructor(x?: number, y?: number) {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        // this.x = x;
        // this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "X", {
        // getX() { return this.x; }
        // setX(value) {
        //     if (value < 0) {
        //         throw new Error('value cannot be less than 0.')
        //     }
        //     this.x = value;
        // }
        get: function () { return this._x; },
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0.');
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "Y", {
        get: function () { return this._y; },
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0.');
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.getDistance = function (another) { };
    return Point;
}());
exports.Point = Point;
