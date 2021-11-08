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

  sendOrder(id: string): Promise<any> {
    return this.firestore
      .collection('sales')
      .doc(id)
      .update({ state: 'enviado' });
  }

  viewSalesfromData(date: Date) {
    const det2 = new Date('2021-10-31');
    const det = new Date('2021-11-1');
    let start = new Date('2017-01-01');
    console.log(start.getTime());
    console.log(det);
    console.log(det2);
    return this.firestore
      .collection('sales', (ref) => ref.where('dateCreated', '>', det2))
      .snapshotChanges();
  }

  deleteSale(id: string): Promise<any> {
    return this.firestore.collection('sales').doc(id).delete();
  }
}
