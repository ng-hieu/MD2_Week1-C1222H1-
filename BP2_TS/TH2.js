var Circle = /** @class */ (function () {
    function Circle(R) {
        this.R = R;
    }
    Circle.prototype.getR = function () {
        return this.R;
    };
    return Circle;
}());
var khoangcach = function (x, y) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};
var Circle1 = new Circle(9);
var OH = Circle1.R;
var Circle2 = new Circle(5);
var RZ = Circle2.R;
var HZ = 24;
var rs = OH - RZ;
var OR = khoangcach(rs, HZ);
console.log(OR);
