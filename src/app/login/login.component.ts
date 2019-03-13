import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import {GoogleSignInSuccess} from 'angular-google-signin';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isValid:boolean = false;
  public token:any;
  public id:any;
  
  @ViewChild('email') email: any;
  @ViewChild('password') password: any;

  public loginData:any={
    email:'',
    password:''
  }
  constructor(
    private router : Router,
    public appService : AppService,
    private socialAuthService: AuthService
  ) { }

 

  // private myClientId: string = '1084286967074-b3bedkt4a7159gd93m8r13a95risi5l3.apps.googleusercontent.com';

  // onGoogleSignInSuccess(event: GoogleSignInSuccess) {
  //   let googleUser: gapi.auth2.GoogleUser = event.googleUser;
  //   let id: string = googleUser.getId();
  //   let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Email: ' + profile.getEmail());

  //   localStorage.setItem('ID', profile.getId())
  // }

  ngOnInit() {

    this.token = localStorage.getItem('token');
    // this.id = localStorage.getItem('ID')
    console.log(this.token);
    

    if(this.token){
      this.router.navigate(['/users'])
    }
    else {
      this.router.navigate(['/login'])
    }
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        localStorage.setItem('token', userData.token);
        localStorage.setItem('id', userData.id);
        localStorage.setItem('image', userData.image);
        localStorage.setItem('name', userData.name)
        if(userData.token){
          this.router.navigate(['/users'])
        }
       
      }
    );
  }

  onLogin(){
    this.isValid = true;
    if(this.email.valid && this.password.valid)
    this.appService.loginDetails(this.loginData)
    .subscribe(
      (response:any)=>{
        console.log("gggg",response.token);
        localStorage.setItem('token',response.token);
        this.router.navigate(['/users'])
        
      }
    )

  }
  // onSignIn(googleUser) {
  //   console.log('googleApi',googleUser);
  //   // this.router.navigate(['/users'])
  //   var profile = googleUser.getBasicProfile();
  //   console.log(profile);
    
  //   console.log('ID: ' + profile.getId());
 
  //    // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }
 
  
}
