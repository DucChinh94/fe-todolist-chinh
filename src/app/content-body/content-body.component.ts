import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from '../todo/todo.service';
import { Subscription } from 'rxjs';
import { Task } from "../Task";


@Component({
  selector: 'app-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.css']
})
export class ContentBodyComponent implements OnInit {

  public choice: boolean = true;
  public tasks: Task[] = [];
  public task!: Task;
  public subscription!: Subscription;

  public count: number = 0;
  public deleteCount: number = 0;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadData();

    this.addTaskForm;
    
    this.todoService.search.subscribe(() => {
      this.tasks = this.todoService.taskSearch;
    })
  }

  // form group
  addTaskForm = new FormGroup({
    id: new FormControl(),
    taskName: new FormControl(),
    description: new FormControl(),
    deleteFlag: new FormControl()
  });

  // Load data
  public loadData() {
    this.subscription = this.todoService.getTodo().subscribe(data => {
      this.tasks = data.obj;
      this.todoService.todoCount$.next(this.tasks.length);
    })
  }

  // add or update
  addOrUpdate() {
    if (this.choice) {
      this.task = this.addTaskForm.value as any;
      this.task.id = this.getLastId(this.tasks);
      this.task.deleteFlag = false;
      this.subscription = this.todoService.UpdateOrInsertTodo(this.task).subscribe(data => {

        this.loadData();
      });
    } else {
      this.task = this.addTaskForm.value as any;
      console.log(this.task);
      this.subscription = this.todoService.UpdateOrInsertTodo(this.task).subscribe(data => {
        this.loadData();
      });
      this.choice = true;
    }
    this.addTaskForm.reset();
  }

  // edit todo by id
  editTodo(id: any) {
    this.choice = false;
    // this.currentId = id;
    this.subscription = this.todoService.getTodoById(id).subscribe((data: any) => {
      this.addTaskForm.controls['taskName'].setValue(data.obj.taskName);
      this.addTaskForm.controls['description'].setValue(data.obj.description);
      this.addTaskForm.controls['id'].setValue(data.obj.id);
      this.addTaskForm.controls['deleteFlag'].setValue(false);
    })
  }

  getDeleteTodoList() {
    this.subscription = this.todoService.getDeletedTodoList().subscribe(data => {
      this.tasks = data.obj;
    })
  }

  // delete todo by id
  deleteTodo(id: number) {
    if (confirm("B???n c?? ch???c ch???n mu???n x??a?") == true) {
      this.subscription = this.todoService.deleteTodo(id).subscribe(data => {
        this.loadData();
      })
    }
  }

  // deleteAllTodo
  deleteAllTodo() {
    if (confirm("B???n c?? ch???c ch???n mu???n x??a t???t c??? d??? li???u?") == true) {
      this.todoService.deleteAllTodo().subscribe(data => {
        this.loadData();
      })
    }
  }

  // get Last ID
  getLastId(tasks: any) {
    let lastID = tasks.length > 0 ? tasks.sort((a: any, b: any) => {
      if (a.id > b.id) return -1;
      if (a.id < b.id) return 1;
      else return 0;
    })[0].id + 1 : 1;
    return lastID;
  }
}
