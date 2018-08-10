import { SaleService } from './../services/sale/sale.service';
import { Component, OnInit } from '@angular/core';
import { NgbDateAdapter, NgbDateNativeAdapter } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { ToastrService } from '../../../node_modules/ngx-toastr';
import { Location } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class AddEditComponent implements OnInit {

  sale = {
  };
  sent;

  constructor(
    private toastr: ToastrService,
    private saleService: SaleService,
    private location: Location) { }

  ngOnInit() {
  }
  onSubmit(){
    this.saleService.add(this.sale).subscribe((data) => {
      this.toastr.success('Venda acionada com sucesso!');
      this.location.back();
    })
  }
  /*
  onSubmit(form){
    if(form.valid){
      this.add();
    }
    //alert(JSON.stringify(this.sale));
  }
  add(){
    this.saleService.add(this.sale).subscribe((data) => {
      this.sent = true;
    })
  }
  */
}
