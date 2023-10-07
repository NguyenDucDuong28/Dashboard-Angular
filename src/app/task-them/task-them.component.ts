import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { NhanVien } from '../nhan-vien';
import { DuAn } from '../du-an';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.css'],
})
export class TaskThemComponent implements OnInit {
  frm1!: FormGroup;
  constructor(private taskService: TaskService, private router: Router) {}
  taskThem: Task = <Task>{};
  themTask() {
    this.taskService.themTask(this.taskThem);
    this.router.navigate(['/task/them']);
  }
  ngOnInit(): void {
    this.frm1 = new FormGroup({
      tenTask: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      duAnID: new FormControl('', Validators.required),
      nhanvienID: new FormControl('', Validators.required),
      moTa: new FormControl('', [Validators.required, Validators.minLength(6)]),
      status: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
    });
  }
}
