import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { RegisterTemplateComponent } from '../register-template/register-template.component';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  message: any;
  subscription: Subscription;
  // @ViewChild(RegisterTemplateComponent)

  public loginShow: boolean = false;
  public userName: any;
  constructor(
    public router: Router,
    private messageService: MessageService,
    // public registerTemplateComponent : RegisterTemplateComponent,
  ) {
    // subscribe to sender component messages
  this.subscription = this.messageService.getMessage().subscribe(message => {
  this.message = message.text; 
  console.log("message", this.message);
  


    });
    // console.log('signup', this.registerTemplateComponent); 

  }


  ngOnInit() {
    // this.userName = this.registerTemplateComponent.userDetails;
    // console.log('name',this.userName);

  }
  signUpTemplate() {
    this.loginShow = true;
    this.router.navigate(['/registation/template']);

  }
  signUpReactive() {
    this.loginShow = true;
    this.router.navigate(['/registation/reactive'])
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
