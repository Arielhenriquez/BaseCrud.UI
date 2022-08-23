import { Component, OnInit } from '@angular/core';
import { Supermarkets } from 'src/app/models/supermarkets';
import { SuperMarketService } from 'src/app/services/super-market.service';


@Component({
  selector: 'app-add-supermarkets',
  templateUrl: './add-supermarkets.component.html',
  styleUrls: ['./add-supermarkets.component.css']
})
export class AddSupermarketsComponent implements OnInit {
  superMarkets: Supermarkets[] = [];
  superMarketToEdit?: Supermarkets;


  constructor(private superMarketservice: SuperMarketService) { }

  ngOnInit(): void {
    this.superMarketservice
      .getSuperMarkets()
      .subscribe((results: Supermarkets[]) => (this.superMarkets = results))
  }

  initNewSuperMarket() {
    this.superMarketToEdit = new Supermarkets();
  }

  updateSuperMarketList(superMarkets: Supermarkets[]) {
    this.superMarkets = superMarkets;
  }

  editSupermarket(superMarkets: Supermarkets) {
    this.superMarketToEdit = superMarkets;
  }
}
