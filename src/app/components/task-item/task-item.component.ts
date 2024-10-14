import { Component, Input } from '@angular/core';
import { ITask } from 'src/app/helper/type';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: ITask;

  constructor() {}
}
