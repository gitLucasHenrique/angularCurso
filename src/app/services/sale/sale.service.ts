import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  url = 'http://localhost:4200/api/sales/';

  constructor(public http : HttpClient) { }

    getAll(){
      return this.http.get(this.url);
    }
    getById(id){
      return this.http.get(this.url + id);
    }
    add(sale){
      return this.http.post(this.url, sale);
    }
}
