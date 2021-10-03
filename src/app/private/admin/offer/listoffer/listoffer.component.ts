import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-listoffer',
  templateUrl: './listoffer.component.html',
  styleUrls: ['./listoffer.component.css']
})
export class ListofferComponent implements OnInit {
  public offers: any[] = [];
  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.offerService.allOffer().subscribe(
      res => {
        console.log(res);
        this.offers = res;
      },
      err => {

        console.log(err);
      }

    )
  }
  delete(offer:any) {

    let index = this.offers.indexOf(offer);
    this.offers.splice(index, 1);

    this.offerService.deleteOffer(offer.id).subscribe(
      res => {
        console.log(res);

      },
      err => {
        console.log(err);
      }
    )
  }

}
