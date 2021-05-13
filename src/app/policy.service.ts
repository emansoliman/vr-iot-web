import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database';
import { Policy } from 'src/app/policy.model';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  constructor(private db: AngularFireDatabase) { }

  postProduct(formValue) {
    this.db.list('/coursess').push(formValue);
  }

  getProducts(){
    return this.db.list('/courses').snapshotChanges().pipe(
      map((products: any[]) => products.map(prod => {
        const payload = prod.payload.val();
        const key = prod.key;
        console.log(payload )
        return <any>{ key, payload };
      })),
    );
  }
}
