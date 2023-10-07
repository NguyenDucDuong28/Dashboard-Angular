import { Injectable } from '@angular/core';
import { NhanVien } from './nhan-vien';
@Injectable({
  providedIn: 'root'
})
export class NhanVienService {

  listNhanVien:NhanVien[] =[
    { id:1, ho:'Nguyễn Bá',ten:'Đạo', ngaysinh:'2001-1-3', phai:true,khuvuc:'Bắc'}, 
    { id:2, ho:'Phạm Kỷ',ten:'Luật', ngaysinh:'2001-5-6', phai:true,khuvuc:'Bắc'}, 
    { id:3, ho:'Mai Thanh',ten:'Toán', ngaysinh:'2002-6-15', phai:true,khuvuc:'Nam'}, 
    { id:4, ho:'Cao Thị Chót',ten:'Vót', ngaysinh:'2002-8-19', phai:false,khuvuc:'Nam'}, 
    { id:5, ho:'Mai Phạt Sáu',ten:'Ngàn', ngaysinh:'2001-2-28', phai:false,khuvuc:'Trung'}, 
  ]
  constructor() { }
  getNhanVien(){
    return this.listNhanVien;
  }
  getMotNhanVien(id:number=0){
    return this.listNhanVien.find(sp => sp.id ==id)
  }
  themNhanVien(NV:NhanVien=<NhanVien>{}){
    this.listNhanVien.push(NV)
  }
  capnhatNhanVien(NV:NhanVien=<NhanVien>{}){
    let index = this.listNhanVien.findIndex(nhanvien => nhanvien.id==NV.id);
    this.listNhanVien[index] =NV;
  }
  xoaNhanVien(id:number=0) {
    let index = this.listNhanVien.findIndex(nhanvien => nhanvien.id==id);
    this.listNhanVien.splice(index);
  }
}
