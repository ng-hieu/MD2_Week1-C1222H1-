class Staff{
    private name:string;
    private email:string;
    private age:number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName():string{
        return this.name;
    }
    setName(newName:string):void{
        this.name = newName;
    }
    getEmail():string{
        return this.email;
    }
    setEmail(newEmail:string):void{
        this.email = newEmail;
    }
    getAge():number{
        return this.age;
    }
    setAge(newAge:number):void{
        this.age = newAge;
    }
}
let Staff1:Staff = new Staff("Hieu", "hieu@gmail.com", 19);
Staff1.setAge(20)
console.log(Staff1.getAge())
// console.log(Staff1.getName())
// console.log(Staff1.getEmail())
