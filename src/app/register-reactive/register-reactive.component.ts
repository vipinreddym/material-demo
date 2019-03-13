import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.css']
})
export class RegisterReactiveComponent implements OnInit {
  public isValid : boolean = false;

   registerForm : FormGroup

  constructor(
    public appService : AppService,
    public router : Router,
    private fb:FormBuilder,
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName : [null,[Validators.required]],
      lastName : [null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      password:[null, [Validators.required,Validators.minLength(8)]],
      mobileNumber:[null, [Validators.required]]
      
    })
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
    if(this.registerForm.valid)
    this.appService.registerData(this.registerForm.value)
    .subscribe(
      (response)=>{
        console.log(response);

        this.router.navigate(['/login'])
        
      }
    )
  }

}
