import { Injectable }   from '@angular/core';
import { Observable }   from 'rxjs';
import { map }          from 'rxjs/operators';
import { HttpClient }   from '@angular/common/http';
import { Product }      from '../models/product';
import { environment }  from '../../../environments/environment';
import { isNullOrUndefined, isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class WooService {

  _products : Product[];

  constructor( private httpClient : HttpClient ) {
  }

  get products():Product[] {
    return this._products
  }

  set products( products: Product[] ) {
    this._products = products
  }

  getProduct():Observable<Product> {
    return null
  }

  getProducts():Observable<Product[]> {

    return this.httpClient.get<Product[]>( environment.endpoints.products )
      .pipe(
        map(
          products => {
            if ( !isNull( products ) ) {
              return this.products = products;
            }
            else {
             return this.products = null;
            }
          }
        ))
  }

  findProductBySlug( slug: string ):Product {

    let _product : Product = null;

    if ( !isNullOrUndefined( this.products ) ) {

      for (let index = 0; index < this.products.length; index++) {

        const product = this.products[index];

        if ( product.slug == slug ) {

          _product = product;
          break;

        }

      }


    }

    return _product;

  }

  getProductBySlug( slug: string ):Observable<Product> {
    return this.httpClient.get<Product>( `${environment.wp.serverApiUrl}${environment.wp.productsEndPoint}?slug=${slug}&consumer_key=${environment.wp.consumer_key}&consumer_secret=${environment.wp.consumer_secret}` )
  }
}
