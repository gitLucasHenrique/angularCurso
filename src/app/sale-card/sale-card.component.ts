import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sale-card',
  templateUrl: './sale-card.component.html',
  styleUrls: ['./sale-card.component.scss']
})
export class SaleCardComponent implements OnInit {

  @Input() sale;
  @Input() showButton;
  @Input() showDetails;

  constructor() { }

  ngOnInit() {
    
  }

}
