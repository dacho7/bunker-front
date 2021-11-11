import { SaleToRegister } from './../../interfaces/sales/SaleToRegister';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

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

  listByDay(date: Date | null): Observable<any> {
    console.log(date);
    var date1 = date;
    var date2 = date;
    if (!date) {
      date1 = new Date();
    } else {
      date1 = new Date(date + ' 00:00');
      date1.setDate(date1.getDate() + 1);
    }
    date2 = new Date(
      date1.getFullYear(),
      date1.getMonth(),
      date1.getDate() - 1
    );
    console.log(date1);
    console.log(date2);

    return this.firestore
      .collection('sales', (ref) =>
        ref.where('dateCreated', '<=', date1).where('dateCreated', '>', date2)
      )
      .snapshotChanges();
  }

  sendOrder(id: string): Promise<any> {
    return this.firestore
      .collection('sales')
      .doc(id)
      .update({ state: 'enviado' });
  }

  deleteSale(id: string): Promise<any> {
    return this.firestore.collection('sales').doc(id).delete();
  }
}
