import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private addOfferUrl = 'http://localhost:8080/offers/add';
  private allOfferUrl="http://localhost:8080/offers/all";
  private deleteOfferUrl="http://localhost:8080/offers/delete/";
  private getOneOfferUrl="http://localhost:8080/offers/one/";
  private updateOfferUrl="http://localhost:8080/offers/update";

  constructor(private http: HttpClient) { }



  public addOffer(offer: Offer) {
    let dataFromApi = this.http.post<any>(this.addOfferUrl,/*req body*/offer);
    return dataFromApi;

  }
  public allOffer() {
    let dataFromApi = this.http.get<any>(this.allOfferUrl);
    return dataFromApi;

  }

  public deleteOffer(id:any) {
    let dataFromApi = this.http.delete<any>(this.deleteOfferUrl+id);
    return dataFromApi;

  }
  public updateOffer(offer: Offer) {
    let dataFromApi = this.http.put<any>(this.updateOfferUrl,/*obligatoire body patch and post*/offer);
    return dataFromApi;

  }
  public getOneOffer(id:any) {
    let dataFromApi = this.http.get<any>(this.getOneOfferUrl+id);
    return dataFromApi;

  }
}
