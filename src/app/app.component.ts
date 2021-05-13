import { Component } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth'
import { auth } from 'firebase';
import { FormBuilder,  FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
}