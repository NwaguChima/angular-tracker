import { Component, EventEmitter, Output } from '@angular/core';
import { ITask } from 'src/app/helper/type';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<ITask> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  constructor() {}

  onSubmit() {
    if (!this.text) {
      alert('Please add a tsk!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
