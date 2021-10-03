import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Offer } from 'src/app/models/offer';
import { CategoryService } from 'src/app/services/category.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-updateoffer',
  templateUrl: './updateoffer.component.html',
  styleUrls: ['./updateoffer.component.css']
})
export class UpdateofferComponent implements OnInit {
  updateOffForm: FormGroup
  public categories: any[] = [];

  constructor(private fb: FormBuilder, private categoryService: CategoryService, 
    private route: ActivatedRoute, private offerService: OfferService,
    private router: Router) { 

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



    this.updateOffForm = this.fb.group(FormControls);

  }

  get description() { return this.updateOffForm.get('description') }
  get price() { return this.updateOffForm.get('price') }
  get category() { return this.updateOffForm.get('category') }
  get image() { return this.updateOffForm.get('image') }

  ngOnInit(): void {
    let idoff = this.route.snapshot.params.id;

    this.offerService.getOneOffer(idoff).subscribe(
      res => {
        let off = res.data;//si on fait update les donnees sont affichees
        console.log(off);
        this.updateOffForm.patchValue({
          description: off.description,
          price: off.price,
          image: off.image,
          category: off.category.id,
        }
        )
      },
      err => {
        console.log(err);
      }

    )

    this.categoryService.allCategory().subscribe(
      res => {
        this.categories = res;


      },
      err => {
        console.log(err);

      }
    )
  }

 updateOff() {

  let idoff = this.route.snapshot.params.id;
  let data = this.updateOffForm.value;
  let offer = new Offer(idoff,data.description, data.image, data.price, new Category(data.category));
  this.offerService.updateOffer(offer).subscribe(
    res => {
      this.router.navigate(['/admin/offer/list']);
    },
    err => {
      console.log(err);
    }

  )
}
}
