import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'the jungle';
  constructor(
    public userService: UserService,
    public router: Router
  ){
    
    }
    logoff(){
      this.userService.removeUser();
      this.router.navigateByUrl('/login');
    }
}
