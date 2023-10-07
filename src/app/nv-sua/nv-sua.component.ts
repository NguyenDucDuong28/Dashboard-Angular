import { Component ,OnInit } from '@angular/core';
import { NhanVienService } from '../nhan-vien.service';
import { ActivatedRoute } from '@angular/router';
import { NhanVien } from '../nhan-vien';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nv-sua',
  templateUrl: './nv-sua.component.html',
  styleUrls: ['./nv-sua.component.css']
})
export class NvSuaComponent implements OnInit {
  constructor (
    private nvService: NhanVienService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}
  idNV: number =Number(this.activatedRoute.snapshot.params['id']);  
  NVSua :NhanVien = <NhanVien>{};
  ngOnInit(): void {
      let kq = this.nvService.getMotNhanVien(this.idNV);
      this.NVSua = kq as NhanVien;
  }
  capnhatNV(){
    this.nvService.capnhatNhanVien(this.NVSua);
    this.router.navigate(['/nhanvien'])
  }
}
