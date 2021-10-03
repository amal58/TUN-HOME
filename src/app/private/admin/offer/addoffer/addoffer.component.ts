import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Offer } from 'src/app/models/offer';
import { CategoryService } from 'src/app/services/category.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.css']
})
export class AddofferComponent implements OnInit {
  public categories: any[] = [];
  addOffForm: FormGroup
  constructor(private fb: FormBuilder, private categoryService: CategoryService,
     private offerServvice: OfferService, private router: Router) {
    let FormControls = {
      description: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z,'-]+"),
        Validators.minLength(2)

      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(1),
        Validators.maxLength(13)

      ]),
      category: new FormControl('', [

        Validators.required,

      ]),
      image: new FormControl('', [

        Validators.required


      ])

    }

    this.addOffForm = this.fb.group(FormControls);
   }
   get description() { return this.addOffForm.get('description') }
  get price() { return this.addOffForm.get('price') }
  get category() { return this.addOffForm.get('category') }
  get image() { return this.addOffForm.get('image') }


  ngOnInit(): void {
    this.categoryService.allCategory().subscribe(
      res => {
        this.categories = res;


      },
      err => {
        console.log(err);

      }
    )
  }

  addOff() {

    let data = this.addOffForm.value;
 
    let product = new Offer(undefined, data.description, data.image, data.price, new Category(data.category));
    this.offerServvice.addOffer(product).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['admin/product/list']);

      },
      err => {
        console.log(err);
      }

    )
}
}
