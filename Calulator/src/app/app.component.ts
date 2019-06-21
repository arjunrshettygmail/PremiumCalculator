import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup , FormBuilder} from '@angular/forms'


import {ContactRequest} from '../app/contact-request';
import {Employee} from '../app/contact-request';

import {OccupationRating} from '../app/contact-request';
import {RatingFactor} from '../app/contact-request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  title = 'Calulator';


  public chosenOccupation: string;
  public chosenFactor: number;
  public amount: number;
  public age: number;
  public premium: number;

  formData  : Employee;


  contactForm: FormGroup


  occupationRatings: Array<OccupationRating> = [];
  ratingFactors: Array<RatingFactor> = [];

  
  constructor() {

  }

  // Step 1
 

  ngOnInit() {
    this.formData = {
      Name: '',
      Age: 0,
      DOB: 0,
      Occupation: '',
      DeathSumInsured: 0,
    }

    this.chosenOccupation = "initial";

    let a = new OccupationRating();
    a.occupation = "Cleaner-Light Manual";
    a.rating = "Light Manual";

    let b = new OccupationRating();
    b.occupation = "Doctor-Light Manual";
    b.rating = "Professional";

    let c = new OccupationRating();
    c.occupation = "Author-White Collar";
    c.rating = "White Collar";

    let d = new OccupationRating();
    d.occupation = "Farmer-Heavy Manual";
    d.rating = "Heavy Manual";

    let e = new OccupationRating();
    e.occupation = "Mechanic-Heavy Manual";
    e.rating = "Heavy Manual";

    let f = new OccupationRating();
    f.occupation = "Florist-Light Manual";
    f.rating = "Light Manual";

    this.occupationRatings.push(a);
    this.occupationRatings.push(b);
    this.occupationRatings.push(c);
    this.occupationRatings.push(d);
    this.occupationRatings.push(e);
    this.occupationRatings.push(f);

    this.ratingFactors.push();
    let r1 = new RatingFactor();
    r1.factor = 1.0;
    r1.rating = "Professional";

    let r2 = new RatingFactor();
    r2.factor = 1.25;
    r2.rating = "White Collar";

    let r3 = new RatingFactor();
    r3.factor = 1.5;
    r3.rating = "Light Manual";

    let r4= new RatingFactor();
    r4.factor = 1.75;
    r4.rating = "Heavy Manual";

    this.ratingFactors.push(r1);
    this.ratingFactors.push(r2);
    this.ratingFactors.push(r3);
    this.ratingFactors.push(r4);


  }



  onChange(value){
    if(!value)
    {
      this.chosenOccupation = 'null';
      this.chosenFactor = 0 ;
      this.premium = 0;
     

    }
    else
    {

      const result: Employee = Object.assign({}, this.formData);
     
      this.amount = result.DeathSumInsured;
      this.age = result.Age;

      this.chosenOccupation = value;
      let selectedFactor = this.ratingFactors.find(x=> x.rating == value)
      this.chosenFactor = selectedFactor.factor;

      //this.premium = (this.amount*this.chosenFactor*this.age)/(1);
      this.premium = (this.amount*this.chosenFactor*this.age)/(1000*12);

    }

  }

  





}
