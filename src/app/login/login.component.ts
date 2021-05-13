import { Component, OnInit } from '@angular/core';
 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

import { PolicyService } from 'src/app/policy.service';
import { Policy } from 'src/app/policy.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database'; 
import { map } from 'rxjs/operators';
export interface Item { id: string; name: string; }

 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  data: object=[];
  

  userTestStatus: { label: string, value: string }[];
  items: Observable<Item[]>=new Observable();
  products$:Observable<any>;
  constructor(private productService: PolicyService) {

    //Just try to log what the db will give me back

    this.productService.getProducts().subscribe(data=>{ this.userTestStatus = [
      { "label": "Saturday", "value": data[0].payload  },
      { "label": "Sunday", "value": data[1].payload },
      { "label": "Monday", "value": data[2].payload },
      { "label": "Tuesday", "value": data[3].payload  },
      { "label": "Wednesday", "value": data[4].payload  },
      { "label": "Thursday", "value": data[5].payload },
      { "label": "Friday", "value": data[6].payload  },
    ];
    this.updateData();    
    });
  }
  


  updateData(){
    this.data = {
      chart: {
        "theme": "fusion",
        "caption": "Total footfall in Bakersfield Central",
        "subCaption": "Last week",
        "xAxisName": "Day",
        "yAxisName": "No. of Footfalls",
        "lineThickness": "2",
        "divlineAlpha": "100",
        "divlineColor": "#999999",
        "divlineThickness": "1",
        "divLineIsDashed": "1",
        "divLineDashLen": "1",
        "divLineGapLen": "1",
        "showXAxisLine": "1",
        "xAxisLineThickness": "1"
      },
      "data": this.userTestStatus
    }
  }
  

  ngOnInit() {
    this.products$=this.productService.getProducts();
    
    
    
  }

}
  
   
   










