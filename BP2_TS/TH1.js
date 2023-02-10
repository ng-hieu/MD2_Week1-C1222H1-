var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.setName = function (newName) {
        this.name = newName;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.setEmail = function (newEmail) {
        this.email = newEmail;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.setAge = function (newAge) {
        this.age = newAge;
    };
    return Staff;
}());
var Staff1 = new Staff("Hieu", "hieu@gmail.com", 19);
Staff1.setAge(20);
console.log(Staff1.getAge());
// console.log(Staff1.getName())
// console.log(Staff1.getEmail())
