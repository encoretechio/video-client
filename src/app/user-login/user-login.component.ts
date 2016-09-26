import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class LoginDetails {
  username: string;
  password: string;
  rememberMe: boolean;
}

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  details:LoginDetails = {
      username:"",
      password:"",
      rememberMe:true
  };

  constructor(
    private router:Router) {
  }

  ngOnInit() {
  }

  onSubmit(details: LoginDetails):void
  {
    let link = ['home'];
    this.router.navigate(link);
  }
}
