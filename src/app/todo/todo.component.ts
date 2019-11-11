import { Component, OnInit } from "@angular/core";
import { Todo } from "./todo.todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  things: Todo[] = [
    { task: "do laundry", completed: false },
    { task: "wash the dishes", completed: false },
    { task: "relax", completed: false },
    { task: "buy dog a new toy", completed: true },
    { task: "meditate...", completed: false },
    { task: "work on condelco", completed: false }
  ];

  constructor() {}

  ngOnInit() {}
}
