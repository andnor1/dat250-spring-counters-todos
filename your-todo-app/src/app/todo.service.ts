import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/todos`);
  }

  addTodo(newTodo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/todos`, newTodo);
  }

  deleteTodo(todoId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/todos/${todoId}`);
  }
}
