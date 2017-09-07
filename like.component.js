"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likesCount, isSelected) {
        this.likesCount = likesCount;
        this.isSelected = isSelected;
    }
    LikeComponent.prototype.onClick = function () {
        this.likesCount += (this.isSelected) ? -1 : 1;
        this.isSelected = !this.isSelected;
    };
    Object.defineProperty(LikeComponent.prototype, "LikesCount", {
        get: function () { return this.likesCount; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LikeComponent.prototype, "IsSelected", {
        get: function () { return this.isSelected; },
        enumerable: true,
        configurable: true
    });
    ;
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
