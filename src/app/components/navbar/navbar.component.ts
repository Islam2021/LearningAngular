import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../serveces/auth.service';
import { User } from './../../interfaces/user.interface';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUser: boolean = false;

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
    this.AuthService.user.subscribe(user => {
      if (user) {
        this.isUser = true;
        this.AuthService.userId = user.uid
      }
      else {
        this.isUser = false;
        this.AuthService.userId = ''
      }
    })
  }

  logout() {
    this.AuthService.logout().then(res => console.log('Out', res))
  }

}
