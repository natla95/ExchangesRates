import { AppService } from './../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rates-table',
  templateUrl: './rates-table.component.html',
  styleUrls: ['./rates-table.component.scss']
})
export class RatesTableComponent implements OnInit {
  ratesData;
  tabelDetailsToDisplay = {};

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getExchangeRates().subscribe(data => {
      this.ratesData = data;
      this.tabelDetailsToDisplay = data[0];
    });
  }

  updateTabelDetails(chosenDate) {
    this.tabelDetailsToDisplay = this.ratesData.find(el => el.effectiveDate === chosenDate);
  }

}
