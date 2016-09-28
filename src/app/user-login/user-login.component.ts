import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { LoginDetails } from '../models/login-details'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [DataService]
})
export class UserLoginComponent implements OnInit {

  details:LoginDetails = {
      username:"",
      password:"",
      rememberMe:true
  };

  constructor(
    private router:Router,
    private dataService:DataService) {
  }

  ngOnInit() {
  }

  onSubmit(details: LoginDetails):void
  {

    this.dataService.validateLogin(details).then(heroes => this.router.navigate(['login']));
    // let link = [''];
    // this.router.navigate(link);
  }
}
