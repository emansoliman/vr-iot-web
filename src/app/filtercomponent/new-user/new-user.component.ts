import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
export interface Item { id: string; name: string; }



@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  data: object=[];
  userTestStatus: { label: string, value: string }[];
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>=new Observable();
  constructor(private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('monthlyScore');
    this.items = this.itemsCollection.valueChanges();
    this.items.subscribe(data => {      
      this.userTestStatus = [
        { "label": "FristWeak", "value": data[0].id },
        { "label": "SecondWeak", "value": data[1].id },
        { "label": "ThirdWeak", "value": data[2].id },
        { "label": "FourthWeak", "value": data[3].id },
      
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
  addItem(name: string) {
    // Persist a document id
    const id = this.afs.createId();
    const item: Item = { id, name };
    this.itemsCollection.doc(id).set(item);


  }


  ngOnInit() {

  }


}
      