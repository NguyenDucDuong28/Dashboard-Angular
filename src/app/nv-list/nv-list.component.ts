import { Component, OnInit } from '@angular/core';
import { NhanVien } from '../nhan-vien';
import { NhanVienService } from '../nhan-vien.service';
@Component({
  selector: 'app-nv-list',
  templateUrl: './nv-list.component.html',
  styleUrls: ['./nv-list.component.css'],
})
export class NvListComponent implements OnInit {
  constructor(private NVService: NhanVienService) {}
  listNhanVien: NhanVien[] = [];
  selectKhuVuc: string = '';
  ngOnInit(): void {
    this.listNhanVien = this.NVService.getNhanVien();
  }
  xoaNhanVien(id: number = 0) {
    this.NVService.xoaNhanVien(id);
    return false;
  }
  locNV() {
    this.listNhanVien = this.NVService.getNhanVien();
    if (this.selectKhuVuc) {
      this.listNhanVien = this.listNhanVien.filter(
        (nv) => nv.khuvuc === this.selectKhuVuc
      );
    }
  }
}
