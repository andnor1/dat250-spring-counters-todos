import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  newTodo: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    // Make an HTTP GET request to fetch todos from your API
    this.http.get<any[]>('YOUR_API_URL_HERE').subscribe((response) => {
      this.todos = response;
    });
  }

  addTodo() {
    // Make an HTTP POST request to add a new todo
    this.http.post('YOUR_API_URL_HERE', this.newTodo).subscribe(() => {
      // Refresh the todos list after adding a new todo
      this.refreshTodos();

      // Optionally, you can reset the form
      this.newTodo = {};
    });
  }

  deleteTodo(id: number) {
    // Make an HTTP DELETE request to delete a todo by its ID
    this.http.delete(`YOUR_API_URL_HERE/${id}`).subscribe(() => {
      // Refresh the todos list after deleting a todo
      this.refreshTodos();
    });
  }
}
