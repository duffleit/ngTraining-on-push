import { ChangeDetectionStrategy, Input, Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  template: `
    <app-todo *ngFor="let todo of todos" [todo]="todo"></app-todo>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
  @Input() todos;
}
