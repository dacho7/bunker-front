import { Observable } from 'rxjs';
import { Sale } from './../class/sale';
import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})

export class SaleService {

  constructor(private firestore: AngularFirestore) {}

  saveSale( sale: Sale ): Promise<any>{
    return this.firestore.collection('sales').add(sale);
  }

  listAllSales(): Observable<any>{
    return this.firestore.collection('sales', ref => ref.orderBy('dateCreated','desc')).snapshotChanges();
  }

  lisOnlyNotSend(): Observable<any> {
    //return this.firestore.collection('sales', ref=> ref.where('state', '!=', 'enviado')).valueChanges();
    return this.firestore.collection('sales').valueChanges()
  }

  sendOrder(id: string): Promise<any>{
    return this.firestore.collection('sales').doc(id).update({state: "enviado"})
  }

  deleteSale(id: string): Promise<any> {
    return this.firestore.collection('sales').doc(id).delete();
  }

}
