import { Component, OnInit,AfterViewInit,ViewChild, Inject } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {UserTaskService} from '../../Services/UserTask.service';
import {Tasks} from '../../Models/Tasks';
import {Users} from '../../Models/Users';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-UsersTasks',
  templateUrl: './UsersTasks.component.html',
  styleUrls: ['./UsersTasks.component.css'],
  providers:[UserTaskService]
})

export class UsersTasksComponent implements OnInit {
  users:Users[];
  tasks:Tasks[];

  constructor(protected servicio: UserTaskService, public dialog: MatDialog,private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  dataSource:any;
  displayedColumns: string[] = ['id','name','actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public getUsers(){
    this.servicio.getUsers()
    .subscribe(
      (data)=> {
        console.log(data);
        //this.dataSource = data;
        this.dataSource = new MatTableDataSource<Users>(data);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public delete(id){
    if(confirm("Delete")){
      this.servicio.deleteUser(id)
      .subscribe(
        (data)=> {
          console.log(data);
          alert("Ok.");
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  public showTasks(user_id,nameUser){
    this.router.navigate(['tasksUser',{user_id:user_id,name:nameUser}]);
  }

  public showEdit(id){
    this.servicio.getUser(id)
    .subscribe(
      (data)=> {
        const dialogRef = this.dialog.open(UserDialog, {
          width: '300px',
          data:data
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log(result);
          this.edit(result);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public edit(users: Users){
    this.servicio.putUser(users)
    .subscribe(
      (data)=> {
        alert("Ok.");
        this.getUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public showSave(){
    const dialogRef = this.dialog.open(UserDialog, {
      width: '300px',
      data:{name:""}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.save(result);
    });
  }

  public save(users:Users){
    this.servicio.postUser(users)
    .subscribe(
      (data)=> {
        alert("Ok.");
        this.getUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

@Component({
  selector: 'dialog-user',
  templateUrl: 'dialog-user.html',
})
export class UserDialog {

  constructor(
    public dialogRef: MatDialogRef<UserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Users) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
