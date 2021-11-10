import { SaleToRegister } from './../../interfaces/sales/SaleToRegister';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaleService {
  constructor(private firestore: AngularFirestore) {}

  saveSale(sale: SaleToRegister): Promise<any> {
    return this.firestore.collection('sales').add(sale);
  }

  listAllSales(): Observable<any> {
    return this.firestore
      .collection('sales', (ref) => ref.orderBy('dateCreated', 'desc'))
      .snapshotChanges();
  }

  lisOnlyNotSend(): Observable<any> {
    return this.firestore
      .collection('sales', (ref) => ref.where('state', '!=', 'enviado'))
      .snapshotChanges();
    //    return this.firestore.collection('sales', ref => {
    //      return ref.orderBy('dateCreated','asc').where('dateCreated','==','enviado');
    //    }).snapshotChanges();
    //return this.firestore.collection('sales').snapshotChanges();
  }

  listByDate(): Observable<any> {
    console.log(new Date(2021, 10, 8));
    return this.firestore
      .collection('sales', (ref) =>
        ref.where('dateCreated', '==', new Date(2021, 10, 8))
      )
      .snapshotChanges();
  }

  sendOrder(id: string): Promise<any> {
    return this.firestore
      .collection('sales')
      .doc(id)
      .update({ state: 'enviado' });
  }

  viewSalesfromData(date: Date) {
    return this.firestore
      .collection('sales', (ref) => ref.where('dateCreated', '<', new Date()))
      .snapshotChanges();
  }

  deleteSale(id: string): Promise<any> {
    return this.firestore.collection('sales').doc(id).delete();
  }
}
