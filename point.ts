export class Point {
    // private x: number;
    // private y: number;
    // constructor(x?: number, y?: number) {
    constructor(private _x?: number, private _y?: number) {
        // this.x = x;
        // this.y = y;
    }
    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }
    // getX() { return this.x; }
    // setX(value) {
    //     if (value < 0) {
    //         throw new Error('value cannot be less than 0.')
    //     }
    //     this.x = value;
    // }
    get X() { return this._x; }
    set X(value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0.')
        }
        this._x = value;
    }
    get Y() { return this._y; }
    set Y(value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0.')
        }
        this._x = value;
    }
    getDistance(another: Point) { /* ... */ }
}