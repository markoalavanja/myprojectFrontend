import { Component } from '@angular/core';
import { PrincipalService } from './services/principal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Parts-Db';

  constructor(private principal: PrincipalService){}

  ngOnInit(): void {
  }

  get loggedUser(){
    return this.principal.loggedUser;
  }
}

