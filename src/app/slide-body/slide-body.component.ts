import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-slide-body',
  templateUrl: './slide-body.component.html',
  styleUrls: ['./slide-body.component.css']
})
export class SlideBodyComponent implements OnInit {

  public todoCount: number = 0;
  public deleteCount: number = 0;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.todoCount$.subscribe(count => {
      this.todoCount = count;
  })

  this.todoService.deletedCount$.subscribe(count => {
    this.deleteCount = count;
  })
  }

}
