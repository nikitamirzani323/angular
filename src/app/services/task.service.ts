import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private APIURL = 'http://localhost:5000/tasks'
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.APIURL);
  }
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.APIURL}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.APIURL}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.APIURL, task, httpOptions);
  }
}
