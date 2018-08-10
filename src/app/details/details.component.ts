import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { SaleService } from '../services/sale/sale.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  sale;
  id;

  constructor(
    private activeRoute: ActivatedRoute,
    private saleService: SaleService
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) =>{
      this.id = params.id;
    })
    this.getData();
  }

  getData(){
    this.saleService.getById(this.id).subscribe((data: any) => {
      if (data.id){
        this.sale = data;
      }
    })
  }

}
