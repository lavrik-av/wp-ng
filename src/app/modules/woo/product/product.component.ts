import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

import { WooService } from '../../../core/services/woo.service';
import { Product } from '../../../core/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  showProduct : boolean = false;
  showSpinner : boolean = false;
  product     : Product = null;

  constructor(
    private activatedRoute : ActivatedRoute,
    private categoryService : WooService
    ) { }

  ngOnInit(): void {
    this.subscribe()
  }

  subscribe():void {

    this.activatedRoute.params.subscribe( params => {

      if ( !isNullOrUndefined( params.slug ) ) {

        this.product = this.categoryService.findProductBySlug( params.slug );

        if ( isNullOrUndefined( this.product ) ) {

          this.showSpinner = true;

          this.categoryService.getProductBySlug( params.slug ).subscribe( product => {

            if ( !isNullOrUndefined( product[0] ) ) {

              this.product      = product[0];
              this.showProduct  = true;

            }

            this.showSpinner = false;

          })
        }
        else {
          this.showProduct = true;
        }
      }
    })
  }
}
