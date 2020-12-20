import { Component, OnInit } from '@angular/core';
import { ITodo } from './itodo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ITodo[]

  constructor( private todoService: TodoService  ) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(data => {
      this.todos = data
    })
  }

}
