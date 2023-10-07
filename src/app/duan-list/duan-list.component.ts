import { Component, OnInit } from '@angular/core';
import { DuAn } from '../du-an';
import { DuAnService } from '../du-an.service';
@Component({
  selector: 'app-duan-list',
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.css'],
})
export class DuanListComponent implements OnInit {
  constructor(private DAService: DuAnService) {}
  stt: number = 1;
  tukhoa: string = '';
  listDuAn: DuAn[] = [];
  ngOnInit(): void {
    (this.listDuAn = this.listDuAn), (this.listDuAn = this.DAService.getDuAn());
  }
  xoaDuAn(id: number = 0) {
    this.DAService.xoaDuAn(id);
    return false;
  }
  locSP() {
    if (this.tukhoa.trim() === '') {
      this.listDuAn = this.DAService.getDuAn();
      console.log('hello');
    } else {
      this.listDuAn = this.listDuAn.filter((p) =>
        p.tenDuAn.includes(this.tukhoa)
      );
    }
  }
}
