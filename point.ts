export class Point {
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