"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeButton = /** @class */ (function () {
    function LikeButton() {
        this.state = false;
    }
    LikeButton.prototype.clickButton = function () {
        if (this.state == false) {
            this.state = true;
            LikeButton.count++;
        }
        else {
            this.state = false;
            LikeButton.count--;
        }
        console.log(this.state);
    };
    Object.defineProperty(LikeButton.prototype, "Count", {
        get: function () {
            return LikeButton.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeButton.prototype, "Liked", {
        get: function () {
            return this.state;
        },
        enumerable: true,
        configurable: true
    });
    LikeButton.count = 0;
    return LikeButton;
}());
exports.LikeButton = LikeButton;
