import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Tasks} from './../Models/Tasks';
import {Users} from './../Models/Users';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {

constructor(private http: HttpClient) { }

  public getUsers(){
    return this.http.get<Users[]>(environment.baseApi + 'Users');
  }

  public getUser(id: number){
    return this.http.get<Users[]>(environment.baseApi + 'Users/'+id);
  }

  public postUser(user: Users){
    return this.http.post<Users[]>(environment.baseApi + 'Users',user);
  }

  public putUser(user: Users){
    return this.http.put<Users[]>(environment.baseApi + 'Users/'+user.id,user);
  }

  public deleteUser(id: number){
    return this.http.delete(environment.baseApi + 'Users/'+id);
  }

  /**
   * Services Task
   */
  public getTasks(){
    return this.http.get<Tasks[]>(environment.baseApi + 'Tasks');
  }

  public getTask(id: number){
    return this.http.get<Tasks[]>(environment.baseApi + 'Tasks/'+id);
  }

  public getTaskUser(user_id: number){
    return this.http.get<Tasks[]>(environment.baseApi + 'Tasks/userTask/'+user_id);
  }

  public postTask(task: Tasks){
    return this.http.post<Tasks[]>(environment.baseApi + 'Tasks',task);
  }

  public putTask(task: Tasks){
    return this.http.put<Tasks[]>(environment.baseApi + 'Tasks/'+task.id,task);
  }

}
