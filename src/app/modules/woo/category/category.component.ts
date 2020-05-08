import { Component, OnInit } from '@angular/core';
import { WooService }   from '../../../core/services/woo.service';
import { Product }           from '../../../core/models/product';
import { Observable }        from 'rxjs';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  products$ : Observable<Product[]>;

  constructor(
    private categoryService : WooService
  ) { }

  ngOnInit(): void {
    this.products$ = this.categoryService.getProducts()
  }
}
