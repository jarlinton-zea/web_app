import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {UserTaskService} from '../../Services/UserTask.service';
import {Tasks} from '../../Models/Tasks';
import {Users} from '../../Models/Users';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-Tasks',
  templateUrl: './Tasks.component.html',
  styleUrls: ['./Tasks.component.css']
})
export class TasksComponent implements OnInit {
  user_id:number;
  user_name:string;

  users:Users[];
  tasks:Tasks[];

  dataSource:any;
  displayedColumns: string[] = ['id','description','state','actions'];
  constructor(protected servicio: UserTaskService, public dialog: MatDialog,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.user_id = Number(this.route.snapshot.paramMap.get('user_id'));
    this.user_name = this.route.snapshot.paramMap.get('name');
    this.getUserTasks(this.user_id);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {

  }

  public getUserTasks(user_id:number){
    this.servicio.getTaskUser(user_id)
    .subscribe(
      (data)=> {
        console.log(data);
        //this.dataSource = data;
        this.dataSource = new MatTableDataSource<Tasks>(data);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  public showEdit(id:number){
    this.servicio.getTask(id)
    .subscribe(
      (data)=> {
        const dialogRef = this.dialog.open(TasksDialog, {
          width: '450px',
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

  public edit(task: Tasks){
    this.servicio.putTask(task)
    .subscribe(
      (data)=> {
        alert("Ok.");
        this.getUserTasks(this.user_id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public showSave(){
    const dialogRef = this.dialog.open(TasksDialog, {
      width: '300px',
      data:{id:0,state:"to do",description:"",user_id:this.user_id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.save(result);
    });
  }

  public save(task:Tasks){
    this.servicio.postTask(task)
    .subscribe(
      (data)=> {
        alert("Ok.");
        this.getUserTasks(this.user_id);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

@Component({
  selector: 'dialog-user',
  templateUrl: 'dialog-tasks-user.html',
})
export class TasksDialog {

  constructor(
    public dialogRef: MatDialogRef<TasksDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Tasks) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
