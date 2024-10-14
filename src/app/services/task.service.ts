import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITask } from '../helper/type';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5001/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl);
  }

  deleteTask(task: ITask): Observable<ITask> {
    const url = `${this.apiUrl}/${task.id}`;

    return this.http.delete<ITask>(url);
  }

  updateTaskReminder(task: ITask): Observable<ITask> {
    const url = `${this.apiUrl}/${task.id}`;

    return this.http.put<ITask>(url, task, httpOptions);
  }
}
