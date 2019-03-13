import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public userName:any;
  public userJob:any;
  public userDetails:any;
  public userId:any;
  public id:any;
  public updateName:any;
  public updateJob:any;
  public hide:boolean = true;
  public token:any;
  public createUser = {
    name:'',
    job:''
  }

  constructor(
    public appService:AppService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.queryParams.subscribe(params => {
      let date = params['id'];
      console.log(date); // Print the parameter to the console. 
  });
  }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    // this.addUser();
  }
  addUser(){
    this.appService.addUser(this.createUser)
    .subscribe(
      (response:any)=>{
        console.log(response);
        this.userDetails = response;
        this.userId = response.id;
        localStorage.setItem('id', this.userId)
        console.log(this.userId);
        
        this.userName = response.name;
        this.userJob = response.job;
        this.createUser.name = '';
        this.createUser.job = '';
        
      }
    )
  }
  editUser(){
    this.createUser = this.userDetails;
    
    // this.router.navigate(['/edit-user/' + this.userId])
  }
  updateUser(){
    // this.id = this.userId
    this.appService.updateUser(this.createUser, this.userId)
    .subscribe(
      (response:any)=>{
        console.log(response);
        this.updateName = response.name;
        this.updateJob = response.job;
        // this.router.navigate(['/edit-user/' + this.userId]);
        
      }
    )
  }
  deleteUser(){
    this.appService.deleteUser(this.userId)
    .subscribe(
      (response:any)=>{
        console.log(response);
        this.hide = false;
        
      }
    )
  }
  logOut(){
    
    localStorage.clear(); 
    this.router.navigate(['/login']);

  }

}
