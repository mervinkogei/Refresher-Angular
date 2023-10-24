import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

constructor(private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  goToHome(){
    this.router.navigate(['home']);
  }

  logout(){
    this.auth.logout();
  }

}
