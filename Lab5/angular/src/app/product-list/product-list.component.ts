import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { Product } from '../products';
import { ActivatedRoute } from '@angular/router';
import { LikeComponent } from '../like/like.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products:Product[] = [];

  constructor(private productService: ProductService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['tag']){
        this.products = this.productService.getAllByTag(params['tag']);
      }
      else{
        this.products = [];
      }
    })
  }
}

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/