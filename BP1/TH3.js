let names = ["alpha", "beta", "gamma", "delta"];
//trích xuất các giá trị của mảng
let [firstName, secondName] = names;
console.log(firstName);
console.log(secondName);
//có thể bỏ qua phần tử bằng dấu phân cách bằng dấu phẩy
let [firstsName, , thirdsName] = names;
console.log(firstsName);
console.log(thirdsName);
//gán một số phần tử mảng cho biến và phần còn lại của phần tử mảng cho CHỈ một biến duy nhất (dùng Rest(...))
let [fistName, , ...lastName] = names;
console.log(fistName);
console.log(lastName);

let [fists, ...lastsName] = names;
console.log(lastsName);
//Hoán đổi giá trị phần tử bằng Destructuring
let [c, d] = [1, 2, 3, 4];
console.log(c);
console.log(d);
[c, d] = [d, c];
console.log(c);
console.log(d);
//Dữ liệu có thể trích xuất từ mộ mảng được trả về từ một hàm
function NamesList() {
    return ["alpha", "beta", "gamma", "delta"]
}
let [a,b] = NamesList();
console.log(a);//"alpha"
console.log(b);//"beta"
//gán các biến từ các đối tượng
let marks = {x: 21, y: -34, z: 47 };

const { x, y, z } = marks; // x = 21, y = -34, z = 47

console.log(x);
console.log(y);
console.log(z);
//đối tượng lồng nhau cũng có thể được trích xuất dữ liệu sử dụng destructuring assignment
const marks = {
    section1: { alpha: 15, beta: 16},
    section2: { alpha: -31, beta: 19 }
};
const { section1 : { alpha: alpha1, beta: beta1 }} = marks;
console.log(alpha1, beta1); // 15, 16