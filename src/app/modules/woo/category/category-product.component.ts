import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { WooService }   from '../../../core/services/woo.service';
import { Product }           from '../../../core/models/product';

@Component({
  selector: 'app-category-product',
	template: `
	<mat-card class="product-card">
			<mat-card-header>
					<mat-card-title><h3><a class="mat-h3" href="/" routerLink="/" routerLinkActive="router-link-active" >{{ product.name }}</a></h3></mat-card-title>
					<mat-card-subtitle><h4>{{ product.sku }}</h4></mat-card-subtitle>
			</mat-card-header>
			<ng-container *ngIf="product?.images.length > 0"><img matCardImage src="{{product.images[0].src}}"></ng-container>
			<mat-card-content [innerHtml]="product.description">
			</mat-card-content>
			<mat-card-actions align="end">
					<button mat-raised-button color="primary">Buy</button>
			</mat-card-actions>
	</mat-card>
	`,
	encapsulation : ViewEncapsulation.None
})
export class CategoryProductComponent implements OnInit {

	@Input() product : Product;

  constructor(
    private categoryService : WooService
  ) { }

  ngOnInit(): void {
  }
}
