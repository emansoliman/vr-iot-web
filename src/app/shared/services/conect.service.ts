import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database'
 

import { Place } from './policy.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConectService {

  
 constructor(private firestore: AngularFirestore) {}


  //READ


  firestorePlacesCollection = this.firestore.collection('connect');

  //READ
  places$ = this.firestorePlacesCollection.snapshotChanges().pipe(
    map(actions => {
      return actions.map(p => {
        const place = p.payload.doc;
        const id= place.id;
        console.log(id)
        return { id} as Place
      });
    })
  );

  //CREATE
  async addPlace(data: Place): Promise<void> {
    try {
      await this.firestorePlacesCollection.add(data);
    } catch (err) {
      console.log(err);
    }
  }

  //UPDATE
  async updatePlace(id: string, visited: boolean): Promise<void> {
    try {
      await this.firestorePlacesCollection
        .doc(id)
        .set({ visited: !visited }, { merge: true });
    } catch (err) {
      console.log(err);
    }
  }

  //DELETE
  async deletePlace(id: string): Promise<void> {
    try {
      await this.firestorePlacesCollection.doc(id).delete();
    } catch (err) {
      console.log(err);
    }
  }}