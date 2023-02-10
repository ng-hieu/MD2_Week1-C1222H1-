class Circle {
    private r:number;
    private Color:string;

    constructor(r: number, Color: string) {
        this.r = r;
        this.Color = Color;
    }
    getr():number{
        return this.r;
    }
    getColor():string{
        return this.Color;
    }
}
let Circle1:Circle = new Circle(5, "#be8e95");
let Circle2:Circle = new Circle(43, "#923342");
let Circlelist:Circle[] = [];
Circlelist.push(Circle1, Circle2);
Circlelist.forEach(CheckCircle)
function CheckCircle(circle: Circle){
    let check:any = `Hình tròn này có màu ${circle.getColor()} và bán kính là: ${circle.getr()}`
    console.log(check);
}