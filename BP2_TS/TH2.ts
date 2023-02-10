class Circle {
    public R: number;

    constructor(R: number) {
        this.R = R;
    }

    getR(): number {
        return this.R;
    }
}

let khoangcach = (x:number, y:number): number => {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
let Circle1: Circle = new Circle(9);
let OH: number = Circle1.R;
let Circle2: Circle = new Circle(5);
let RZ: number = Circle2.R;
let HZ: number = 24;
let rs = OH - RZ;
let OR = khoangcach(rs, HZ)
console.log(OR)
console.log(OH)

