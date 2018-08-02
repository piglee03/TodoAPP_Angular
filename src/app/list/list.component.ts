import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { UpdateListService } from '../update-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: Todo[];
  constructor(private updateListService: UpdateListService) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.list = this.updateListService.getList();
  }
  delItem(id: number): void {
    this.updateListService.delItem(id);
  }
  flagReverse(id: number): void {
    this.updateListService.doneReverse(id);
  }
}
