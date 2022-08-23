import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Supermarkets } from 'src/app/models/supermarkets';
import { SuperMarketService } from 'src/app/services/super-market.service';

@Component({
  selector: 'app-edit-supermarkets',
  templateUrl: './edit-supermarkets.component.html',
  styleUrls: ['./edit-supermarkets.component.css']
})
export class EditSupermarketsComponent implements OnInit {
  @Input() superMarkets?: Supermarkets;
  @Output() superMarketUpdated = new EventEmitter<Supermarkets[]>();

  constructor(private baseService: SuperMarketService) { }

  ngOnInit(): void {
  }

  createSuperMarket(superMarket: Supermarkets) {
    this.baseService
      .createSuperMarkets(superMarket)
      .subscribe((superMarkets: Supermarkets[]) => this.superMarketUpdated.emit(superMarkets))
  }

  updateSuperMarkets(superMarket: Supermarkets) {
    this.baseService
      .updateSuperMarkets(superMarket)
      .subscribe((superMarkets: Supermarkets[]) => this.superMarketUpdated.emit(superMarkets))
  }

  deleteSuperMarkets(superMarket: Supermarkets) {
    this.baseService
      .deleteSupermarket(superMarket)
      .subscribe((superMarkets: Supermarkets[]) => this.superMarketUpdated.emit(superMarkets))
  }
}
