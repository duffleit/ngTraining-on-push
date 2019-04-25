import { ChangeDetectionStrategy, Input, Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
    <div>{{ todo.title }} - {{ runChangeDetection }}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input() todo;

  get runChangeDetection() {
    console.log('TodoComponent - Checking the view');
    return true;
  }
}
