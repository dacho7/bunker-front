import { Injectable } from '@angular/core';
import { Product } from './../class/product';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable ({
  providedIn: 'root'
})

export class ProductService {

  constructor(private firestore: AngularFirestore) {}

  registerProduct( product: Product ): Promise<any>{
    return this.firestore.collection('products').add(product);
  }

}
