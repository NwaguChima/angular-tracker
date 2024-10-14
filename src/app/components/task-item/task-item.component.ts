import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ITask } from 'src/app/helper/type';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: ITask;
  @Output() onDeleteTask: EventEmitter<ITask> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  onDelete(task: ITask) {
    this.onDeleteTask.emit(task);
  }
}
