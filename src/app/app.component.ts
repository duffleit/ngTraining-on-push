import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="add()">Add a couple of Todos</button>
    <app-todos [todos]="todos"></app-todos>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  todos = [{ title: 'Todo 0' }, { title: 'Todo 1' }];

  add() {
    const currentIndex = this.todos.length;
    const numberArray = Array.from(
      { length: 5000 },
      (_, i) => i + currentIndex
    );

    this.todos = [
      ...this.todos,
      ...numberArray.map(i => ({
        title: 'Todo ' + i
      }))
    ];
  }
}
