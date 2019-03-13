import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';



@Component({
  selector: 'app-register-template',
  templateUrl: './register-template.component.html',
  styleUrls: ['./register-template.component.css']
})
export class RegisterTemplateComponent implements OnInit {

  public isValid: boolean = false;
  // public location:any;

  @ViewChild('email') email: any;
  @ViewChild('password') password: any;

  public userDetails: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobileNumber: '',
    location: ''
  }

  constructor(
    public appService: AppService,
    public router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  onSignup() {
    this.isValid = true;
    if(this.email.valid && this.password.valid && this.userDetails.email && this.userDetails.password && this.userDetails.firstName && this.userDetails.lastName && this.userDetails.mobileNumber && this.userDetails.location)
    this.appService.registerData(this.userDetails)
    .subscribe(
      (response)=>{
        console.log(response);
        this.router.navigate(['/login'])
        
      }
    )
  }
  sendMessage(): void {
    // send message to subscribers via observable subject
    this.isValid = true;
    if (this.email.valid && this.password.valid && this.userDetails.email && this.userDetails.password && this.userDetails.firstName && this.userDetails.lastName && this.userDetails.mobileNumber)

      this.messageService.sendMessage(this.userDetails.firstName)
    // this.router.navigate(['/login'])
  }
  clearMessage(): void {
    // clear message
    this.messageService.clearMessage();
  }

  getLocation(selectedData: any) {
    console.log("location address", selectedData);
    if (selectedData.response) {
      this.userDetails.location = selectedData.data.description;
      console.log("location", this.userDetails.location);

    }

  }

    

}
