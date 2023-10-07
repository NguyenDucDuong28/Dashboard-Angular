import { Component , OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service'
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
 constructor(private taskService: TaskService) {}
 listTask:Task[]= [];
 ngOnInit(): void {
     this.listTask=this.taskService.getTask();
 }  
 xoaTask(id:number=0) {
  this.taskService.xoaTask(id);
  return false;
 }
};
