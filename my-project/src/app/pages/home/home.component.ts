import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Delovi } from 'src/app/models/delovi.model';
import { DeloviApiService } from 'src/app/services/delovi-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  deloviList: Delovi[];
  delovi: Delovi={};
  iddelovi:number=0;
  activator: number=0;
  _activator: number=0;
  activator_: number=0;

  constructor(private deloviApi: DeloviApiService, private router: Router) {
    this.deloviList= [];
  }

  ngOnInit(): void {
    this.loadDelove();
  }

  loadDelove(){
    this.deloviApi.getAll().subscribe(
      deloviList =>{
        this.deloviList= deloviList;
      }
    );
  }
  logout(){
    this.router.navigate(['/login']);
  }

  save(){
    this.deloviApi.save(this.delovi).subscribe(
      response =>{
        console.log('Sacuvano');
        this.loadDelove();
      }
    )
  }
  deletebyid(){
    this.deloviApi.deletebyid(this.iddelovi).subscribe();
  }
  findbyid(){
    this.deloviApi.findbyid(this.iddelovi).subscribe(
      delovi =>{
        this.delovi=delovi;
      }
    );
    this.activator_=1;
  }
  add(){
    this.delovi={};
    this.activator=1;
    this._activator=0;
  }
  delorfind(){
    this.activator=0;
    this._activator=1;
    this.activator_=0;
    this.delovi={};
    this.iddelovi=0;
  }
  view(){
    this.activator=0;
    this._activator=0;
    this.loadDelove();
  }
  change(){
    this.activator=1;
    this._activator=0;
  }
}
