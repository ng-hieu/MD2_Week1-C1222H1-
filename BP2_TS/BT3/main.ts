import {employee} from "./employee";
import {employeeManager} from "./employeeManager";
let listEmployee: employee[] = [];
listEmployee.push(new employee("Nguyen Van A", "Nam", new Date("1991-4-12"), "A@gmail.com"));
listEmployee.push(new employee("Nguyen Van B", "Nam", new Date("2002-10-12"), "B@gmail.com", +843240285));

let checkEmployee = (Employee: employee)=> {
    let check: any = `Họ và tên: ${Employee.getHoten()}
Giới tính: ${Employee.getGioitinh()}
Ngày sinh: ${Employee.getNgaysinh()}
Email: ${Employee.getEmail()}
Số điện thoại: ${Employee.getSdt()}`;
    console.log(check);
}
listEmployee.forEach(checkEmployee);