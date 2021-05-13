import { Component, OnInit ,Input ,NgZone} from '@angular/core';
import { OrdersService } from "../shared/services/orders.service";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { AuthService } from "../shared/services/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }
  

  ngOnInit() {
  }

}
