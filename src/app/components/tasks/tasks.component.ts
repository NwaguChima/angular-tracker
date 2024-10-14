import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/helper/type';
import { tasks } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = tasks;

  ngOnInit(): void {}
}
