import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators, FormBuilder } from "@angular/forms";
import { ConectService} from "../shared/services/conect.service";
import {Place} from "../shared/services/policy.model"
import { AngularFireModule } from "@angular/fire";

 
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-connectus',
  templateUrl: './connectus.component.html',
  styleUrls: ['./connectus.component.css']
})
export class ConnectusComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    comment: new FormControl(''),
    feedback: new FormControl('')
  });
  constructor(private placesService:  ConectService) {}


  onSubmit() {
    const place = this.form.value;
    this.placesService.addPlace({ ...place, visited: false });
    this.form.reset();
  }


  ngOnInit() {
  }

  
 
    }