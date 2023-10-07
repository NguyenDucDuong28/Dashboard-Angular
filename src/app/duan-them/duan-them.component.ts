import { Component, OnInit } from '@angular/core';
import { DuAn } from '../du-an';
import { DuAnService } from '../du-an.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.css'],
})
export class DuanThemComponent implements OnInit {
  constructor(private DAThemService: DuAnService, private router: Router) {}
  DAThem: DuAn = <DuAn>{};
  listDuAn: DuAn[] = []; // Khai báo và khởi tạo biến listDuAn

  themDA() {
    this.DAThemService.themDuan(this.DAThem);
    this.router.navigate(['/duan/them']);
  }
  ngOnInit(): void {
    this.listDuAn = this.DAThemService.getDuAn();
  }
}
