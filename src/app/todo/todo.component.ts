import { Component, OnInit } from "@angular/core";
import { Todo } from "../todo";

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

  newTask: Todo = {
    task: "",
    completed: false
  };

  filterText: string;

  addTask(): void {
    this.things.push(this.newTask);
    this.newTask = {
      task: "",
      completed: false
    };
  }

  removeTask(i): void {
    this.things.splice(i, 1);
  }

  completeTask(i): void {
    this.things[i].completed = true;
  }

  // filterTasks(): Todo[] {
  //   return this.things.filter(item => item.task.includes(filterText));
  // }

  constructor() {}

  ngOnInit() {}
}
