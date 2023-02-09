// const Cars1 = ["Audi", "Ferari", "Lamborghini", "BMW"];
// const Cars2 = [...Cars1];
// const Cars3 = [...Cars1, "CRV", "Honda"];
// console.log(Cars1);
// console.log(Cars2);
// console.log(Cars3); --SAO CHÉP TỪ Cars1 SANG Cars2 VÀ Cars3--

// const Cars1 = ["Audi", "Ferari", "Lamborghini", "BMW"];
// const Cars2 = ["Camry", "Toyota"];
// const Cars3 = [...Cars1, ...Cars2];
// const Cars4 = [...Cars2, ...Cars1];
// console.log(Cars1);
// console.log(Cars2);
// console.log(Cars3);
// console.log(Cars4);  -- SỬ DỤNG SPREAD OPERATOR ĐỂ HỢP NHẤT CÁC BẢNG

// const cars1 = {
//     Brand: "BMW",
//     Color: "Red"
// }
// const cars2 = {...cars1};
// console.log(cars2); --SAO CHÉP TỪ OBJ CARS1 SANG OBJ CARS2

// const cars1 = {
//     Brand: "BMW",
//     Color: "Red"
// }
// const cars2 = {
//     Brand: "honda",
//     Color: "blue"
// }
// const cars3 = {...cars1,...cars2};
// console.log(cars3) -- SỬ DỤNG SPREAD OPERATOR ĐỂ HỢP NHẤT CÁC OBJ

// const cars1 = "BMW";
// const arrcars1 = [...cars1];
// console.log(arrcars1); -- BIẾN CHUỖI THÀNH MẢNG

const Cars1 = ["Audi", "Ferari", "Lamborghini", "BMW"];
const [a,b,...x] = Cars1;
console.log(a);
console.log(b);
console.log(x);