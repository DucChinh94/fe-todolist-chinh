import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Task } from "../Task";
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public url: string = "http://localhost:9095/api/public/"
  public tasks: Task[] = [];
  public taskFilter: Task[] = [];
  public task!: Task;

  public search= new EventEmitter();
  public searchDeleted= new EventEmitter();

  public taskSearch: any;
  public taskDeletedSearch: any;
  public href : any;


  public todoCount$ = new BehaviorSubject<number>(0);
  public deletedCount$ = new BehaviorSubject<number>(0);


  constructor(private http: HttpClient) { }

  // getTodoList
  public getTodo(): Observable<any> {
    return this.http.get(this.url);
  }

  // Update or Insert
  public UpdateOrInsertTodo(task: Task): Observable<any> {
  
    return this.http.post(this.url + 'insert', task);
  }

  // Delete
  public deleteTodo(id: number): Observable<any> {
    return this.http.delete(this.url + 'delete/' + id);
  }

  // DeleteAllTodo
  public deleteAllTodo(): Observable<any> {
    return this.http.delete(this.url + 'deleteAllTodo');
  }

  // DeleteAllTodoTrash
  public deleteAllTodoTrash(): Observable<any> {
    return this.http.delete(this.url + 'deleteAllTodoTrash');
  }

  // deleteTodoTrash
  public deleteTodoTrash(id: number): Observable<any> {
    return this.http.delete(this.url + 'deleteTodoTrash' + id);
  }

  // responseAllTodo
  public responseAllTodo(): Observable<any> {
    return this.http.get(this.url + 'responseAllTodo');
  }

  // responseTodo
  public responseTodo(id: number): Observable<any> {
    return this.http.get(this.url + 'responseTodo' + id);
  }

  // get Deleted TodoList
  getDeletedTodoList(): Observable<any> {
    return this.http.get(this.url + 'deletedList');
  }

  // get by Id
  getTodoById(id: number): Observable<any> {
    return this.http.get(this.url + id);
  }

    // Search By Name
    searchByName(name : string){
      const params = new HttpParams().set('name', name);
      (this.http.get(this.url + 'search', {params}) as Observable<any>).subscribe((res)=>{
        this.taskSearch = res.obj as Observable<any>;
        this.search.emit();
      });
      return  (this.http.get(this.url + 'search', {params}) as Observable<any>);
    }

  // Search Deleted By Name
  searchDeletedByName(name: string) {
    const params = new HttpParams().set('name', name);
    (this.http.get(this.url + 'searchDeleted', { params }) as Observable<any>).subscribe((data) => {
      this.taskDeletedSearch = data.obj as Observable<any>;
      this.searchDeleted.emit();
    });
    return (this.http.get(this.url + 'searchDeleted', { params }) as Observable<any>);
  }

  // // Search By Name
  // searchByName(name : string){
  //   const params = new HttpParams().set('name', name.trim());
  //   if(this.href == '/home') {
  //     (this.http.get(this.url + 'search', {params}) as Observable<any>).subscribe((res)=>{
  //       this.taskSearch = res.item as Observable<any>;
  //       this.search.emit();
  //     });
  //     return  (this.http.get(this.url + 'search', {params}) as Observable<any>);

  //   } else{
  //     (this.http.get(this.url + 'searchDeleted', {params}) as Observable<any>).subscribe((res)=>{
  //       this.taskDeletedSearch = res.item as Observable<any>;
  //       this.searchDeleted.emit();
  //     });
  //     return  (this.http.get(this.url + 'searchDeleted', {params}) as Observable<any>);
  //   }
    
  // }
}





