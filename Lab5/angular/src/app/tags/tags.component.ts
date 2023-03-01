import { Component, OnInit } from '@angular/core';
import { Tag } from '../tag';
import { ProductService } from '../services/product/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  tags: Tag[] = [];
  constructor(private productService:ProductService){}
  ngOnInit(): void{
    this.tags = this.productService.getAllTags();
  }
}
