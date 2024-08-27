import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { InfoPage } from '../interfaces/info-page.interface';
import { FormationPageInterface } from '../interfaces/formation-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  loadedData = false;
  loadedFormation = false;
  formation : any[] = [];

  constructor( private http: HttpClient ) {
    this.loadData();
    this.loadFormation();
  }

  private loadData() {
    //Read from json config data
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPage) => {
        this.loadedData = true;
        this.info = resp;
      });
  }

  private loadFormation(){
    this.http.get('https://angular-portfolio-7aa85-default-rtdb.europe-west1.firebasedatabase.app/formation.json')
      .subscribe( ( resp: any ) => {
        this.loadedFormation = true;
        this.formation = resp;
        console.log(resp);
      });
  }
}
