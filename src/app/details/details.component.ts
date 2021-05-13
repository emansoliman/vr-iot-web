import { Component, OnInit ,NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../shared/services/auth.service";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }
  ngOnInit() {
  }

}
