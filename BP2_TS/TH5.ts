class staff {
    private Hoten: string;
    private Gioitinh: string;
    private Ngaysinh: Date;
    private Email: string;
    private Sdt?: string;

    constructor(Hoten: string, Gioitinh: string, Ngaysinh: Date, Email: string, Sdt?: string) {
        this.Hoten = Hoten;
        this.Gioitinh = Gioitinh;
        this.Ngaysinh = Ngaysinh;
        this.Email = Email;
        this.Sdt = Sdt;
    }

    getHoten() {
        return this.Hoten;
    }

    getGioitinh() {
        return this.Gioitinh;
    }

    getNgaysinh() {
        return this.Ngaysinh;
    }

    getEmail() {
        return this.Email;
    }

    getSdt() {
        return this.Sdt;
    }
}

let listStaff: staff[] = [];
listStaff.push(new staff("Nguyen Van A", "Nam", new Date("1991-4-12"), "A@gmail.com"));
listStaff.push(new staff("Nguyen Van B", "Nam", new Date("2002-10-12"), "B@gmail.com", "003240285"));
listStaff.forEach(checkStaff);

function checkStaff(staff: staff) {
    let check: any = `Họ và tên: ${staff.getHoten()}
Giới tính: ${staff.getGioitinh()}
Ngày sinh: ${staff.getNgaysinh()}
Email: ${staff.getEmail()}
Số điện thoại: ${staff.getSdt()}`;
    console.log(check);
}
