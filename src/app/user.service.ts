import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';
 
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
constructor(private db : AngularFirestore)
{}
   
 
  
}
