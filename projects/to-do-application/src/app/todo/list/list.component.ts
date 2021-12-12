import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() todoItems: string[] = [];
  private maxProjectNum: number = 0;

  constructor() {}

  ngOnInit(): void {}
  addTodoItem() {
    this.todoItems.push('Finish Project #' + (this.maxProjectNum + 1));
    this.maxProjectNum++;
  }
  deleteTodo(index: number) {
    this.todoItems = this.todoItems.filter(
      (_todo, idx: number) => idx !== index
    );
  }
  editTodoItem(event: Event) {
    const input = event.target as HTMLInputElement;
    this.todoItems[+input.name] = input.value;
  }
  get todo() {
    return this.todoItems;
  }
}
