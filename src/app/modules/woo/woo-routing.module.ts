import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
	{
		path : "",
		component : CategoryComponent
	},
  {
		path : "product/:slug",
		component : ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WooRoutingModule { }
