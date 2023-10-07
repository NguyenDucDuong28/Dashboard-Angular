import { Component ,OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NhanVien } from '../nhan-vien';
import { DuAn } from '../du-an';
import { DuAnService } from '../du-an.service';
import { NhanVienService } from '../nhan-vien.service';
@Component({
  selector: 'app-task-sua',
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.css']
})
export class TaskSuaComponent implements OnInit {
  constructor (
    private duanService: DuAnService,
    private nhanvienService: NhanVienService,
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  TASKSua :Task = <Task>{};
  listTask : Task[] =[];
  listDuAn : DuAn[] = [];
  listNhanVien : NhanVien[] = [];
  idTASK:number=Number(this.activatedRoute.snapshot.params['id']);
  ngOnInit(): void {
    this.listTask = this.taskService.getTask()
    this.listDuAn = this.duanService.getDuAn();
    this.listNhanVien = this.nhanvienService.getNhanVien()
    let kq = this.taskService.getMotTask(this.idTASK)
    this.TASKSua = kq as Task;
  }
  capnhatTask (){
    this.taskService.capNhatTask(this.TASKSua);
    this.router.navigate(['/nhanvien'])
  }
}