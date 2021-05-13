import { Component, OnInit,NgZone} from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-homee',
  templateUrl: './homee.component.html',
  styleUrls: ['./homee.component.css']
})
export class HomeeComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }
  ngOnInit() {
  }

}
