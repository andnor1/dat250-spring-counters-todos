import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  newTodo: any = {};

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  addTodo(): void {
    this.todoService.addTodo(this.newTodo).subscribe(() => {
      // Optionally, you can navigate back to the todo list here.
    });
  }
}
