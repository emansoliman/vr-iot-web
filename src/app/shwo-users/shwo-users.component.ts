import { Component, OnInit,Input } from '@angular/core';
import { OrdersService } from "../shared/services/orders.service";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormBuilder,  FormGroup, Validators, AbstractControl} from '@angular/forms';





export interface Item { id: string; name: string; }
import { Place } from '../shared/services/policy.model';





@Component({
  selector: 'app-shwo-users',
  templateUrl: './shwo-users.component.html',
  styleUrls: ['./shwo-users.component.css']
})
export class ShwoUsersComponent  {




  someData : Array<{photoURL: string, displayName: string,email: string,score: string}>;
  items: Observable<any[]>;
  i=0;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('users').valueChanges();
    this.items.forEach((valuee) =>{
      
      this.someData=valuee
      this.selectedData =this.someData;
       console.log( this.selectedData )
    
    });   
  
 this.selected="ALL options";

      
  }
 

  options =['50','100',"150","120","200","300","400","500","600","700","800","900","1000","ALL options"]
  
  selectedData;
  selected
  
 
  
  onSelect(val){
    console.log(val);
    this.selectedData = this.someData.filter(x => x.score== val)
    if(this.selected=="ALL options")
    this.selectedData=this.someData;
  }

 

}