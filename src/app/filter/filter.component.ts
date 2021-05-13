import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {


  someData : Array<{id: string, name: string,value: string,addres: string,phone: string}>;
  items: Observable<any[]>;
  i=0;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('goods').valueChanges();
    this.items.forEach((valuee) =>{
      
      this.someData=valuee
      this.selectedData = this.someData;
       console.log( this.selectedData )
    
    });   
  
 this.selected="ALL options";

      
  }
 

  options =['cairo', 'ALX','Benha',"Bens","ALL options"]
  
  selectedData;
  selected
  
 
  
  onSelect(val){
    console.log(val);
    this.selectedData = this.someData.filter(x => x.addres== val)
    if(this.selected=="ALL options")
    this.selectedData=this.someData;
  }

 

}
