export class employee {
    private Hoten: string;
    private Gioitinh: string;
    private Ngaysinh: Date;
    private Email: string;
    private Sdt?: number;

    constructor(Hoten: string, Gioitinh: string, Ngaysinh: Date, Email: string, Sdt?: number) {
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

