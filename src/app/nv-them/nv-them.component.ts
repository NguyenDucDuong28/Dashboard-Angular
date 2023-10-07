import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NhanVien } from '../nhan-vien';
import { NhanVienService } from '../nhan-vien.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-nv-them',
  templateUrl: './nv-them.component.html',
  styleUrls: ['./nv-them.component.css'],
})
export class NvThemComponent implements OnInit {
  constructor(private NVThemService: NhanVienService, private router: Router) {}
  NVThem: NhanVien = <NhanVien>{};
  frm1!: FormGroup;
  themNV() {
    this.NVThemService.themNhanVien(this.NVThem);
    this.router.navigate(['/nhanvien/them']);
  }
  ngOnInit(): void {
    this.frm1 = new FormGroup({
      ho: new FormControl('teonv', Validators.minLength(6)),
    });
  }
}
