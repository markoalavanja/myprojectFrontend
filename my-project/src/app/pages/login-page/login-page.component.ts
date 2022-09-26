import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { PrincipalService } from 'src/app/services/principal.service';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user: User= {};
  title='Login page';
  errorMessage:string;

  constructor(private userApi: UserApiService, private router: Router, private principal: PrincipalService) {
    this.user= {};
    this.errorMessage= '';

  }

  ngOnInit(): void {
  }

  login(): void{
    console.log('Button is pressed:', this.user);
    this.userApi.login(this.user).subscribe(
      response => {
        console.log('response:', response);
        this.principal.loggedUser= response;
        this.router.navigate(['/home']);
      },
      error => {
        console.log('Error!');
        this.errorMessage= 'Ne postoji korisnik'
      }

    );
  }

  reset() {
    this.user= {};
    this.errorMessage= '';
  }
}
