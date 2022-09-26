import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { Delovi } from '../models/delovi.model';

@Injectable({
  providedIn: 'root'
})
export class DeloviApiService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Delovi[]>('http://localhost:8080/delovi/all')
  }
  deletebyid(iddelovi:number){
    return this.httpClient.delete(`http://localhost:8080/delovi/delete/${iddelovi}`);
  }
  save(delovi: Delovi){
    return this.httpClient.post<Delovi>('http://localhost:8080/delovi/save', delovi);
  }
  findbyid(iddelovi:number){
    return this.httpClient.get<Delovi>(`http://localhost:8080/delovi/get/${iddelovi}`)
  }
}
