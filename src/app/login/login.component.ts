import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user={};
  constructor(
    public userService: UserService,
    public router: Router
  ) { }

  ngOnInit() {
    if (this.userService.getUser()){
      this.router.navigateByUrl('/list');
    }
  }
  onSubmit(form){
    this.userService.setUser(this.user);
    this.router.navigateByUrl('/list');
  }
}
