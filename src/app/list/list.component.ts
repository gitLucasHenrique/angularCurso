import { Component, OnInit } from '@angular/core';
import { SaleService } from '../services/sale/sale.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list = [];
  orderByProperty = 'title';

  /*
  list = [
    {
        id: 1,
        title: 'Aplicativo da RockApps',
        customer: 'Renato Probst',
        company: 'RockApps',
        value: 30000,
        createdAt: '2018-03-28'
    },
    {
        id: 2,
        title: 'Software da Velvet',
        customer: 'Alvaro Portela',
        company: 'Velvet Systems',
        featured: true,
        value: 20000,
        createdAt: '2018-03-22'
    },
    {
        id: 3,
        title: 'Aplicativo da padaria',
        customer: 'Roberto Barroso',
        company: 'Padaria Monsanto',
        value: 27000,
        createdAt: '2018-03-21'
    }
];
*/
  constructor(public salesService : SaleService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.salesService.getAll().subscribe((data:any) => {
      this.list = data;
    })
  }

  orderBy(order){
    this.orderByProperty = order;
  }
}
