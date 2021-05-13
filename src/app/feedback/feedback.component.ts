import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup , Validators, FormBuilder } from "@angular/forms";
import { OrdersService } from "../shared/services/orders.service";
import {Place} from "../shared/services/policy.model"
import { AngularFireModule } from "@angular/fire";

 
import {FormsModule,ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    comment: new FormControl(''),
    feedback: new FormControl('')
  });
  constructor(private placesService:  OrdersService) {}



  onSubmit() {
    const place = this.form.value;
    this.placesService.addPlace({ ...place, visited: false });
    this.form.reset();
  }


  ngOnInit() {
  }

  
 
    }


