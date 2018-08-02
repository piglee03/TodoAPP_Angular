import { Component } from '@angular/core';
import { UpdateListService } from './update-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  id = 3;
  constructor(private updateListService: UpdateListService) {}

  update(text: string): void {
    if (text !== '') {
      this.updateListService.addItem(this.id++, text);
    }
  }
}
