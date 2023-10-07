import { Component ,OnInit } from '@angular/core';
import { DuAn } from '../du-an';
import { DuAnService } from '../du-an.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-duan-sua',
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.css']
})
export class DuanSuaComponent implements OnInit {
  constructor (
    private daService: DuAnService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}
  DASua :DuAn = <DuAn>{};
  listDuAn: DuAn[] = []; // Khai báo và khởi tạo biến listDuAn
  idDA: number =Number(this.activatedRoute.snapshot.params['id']);  
  ngOnInit(): void {
    this.listDuAn = this.daService.getDuAn();
      let kq = this.daService.getMotDuAn(this.idDA);
      this.DASua = kq as DuAn;
      
  }
  capnhatDA(){
    this.daService.capnhatDuAn(this.DASua);
    this.router.navigate(['/duan'])
  }
}
