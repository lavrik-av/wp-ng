import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { MaterialModule } from '../../core/shared-modules/material.module';
import { WooRoutingModule } from './woo-routing.module';

import { CategoryComponent }        from './category/category.component';
import { ProductComponent }         from './product/product.component';
import { CategoryProductComponent } from './category/category-product.component';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryProductComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    WooRoutingModule
  ],
  exports : [
    CategoryComponent
  ]
})
export class WooModule { }
