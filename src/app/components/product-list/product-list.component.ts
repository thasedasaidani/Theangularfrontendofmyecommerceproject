import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private ProductService: ProductService){

  }
  ngOnInit(): void {
     this.listProducts();
  }
   listProducts() {
     this.ProductService.getProductList().subscribe(
       data => {
        this.products = data;
       }
     )
   }

}
