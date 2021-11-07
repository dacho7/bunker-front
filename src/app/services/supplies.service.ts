import { SupplieToRegister } from './../../interfaces/sales/supplies/SupplieToRegister';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class SupplieService {
  constructor(private firestore: AngularFirestore) {}

  registerSupplie(supplie: SupplieToRegister): Promise<any> {
    return this.firestore.collection('supplies').add(supplie);
  }

  listAllSupplies(): Observable<any> {
    return this.firestore.collection('supplies').snapshotChanges();
  }
}
