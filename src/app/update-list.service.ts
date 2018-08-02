import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Todo} from './todo';
import {LIST} from './todoList';

@Injectable({
  providedIn: 'root'
})
export class UpdateListService {
  getList(): Todo[] {
    return LIST;
  }

  addItem(id:number, text: string): void {
    LIST.push({id:id, text:text, isDone:false});
  }
  
  delItem(id:number):void {
    //let index = LIST.findIndex(item => item.id === id);
    var index = LIST.map(item => item.id).indexOf(id);
    LIST.splice(index, 1);
  }
  
  doneReverse(id:number):void {
    var index = LIST.map(item => item.id).indexOf(id);
    LIST[index].isDone = !LIST[index].isDone;
  }
}
