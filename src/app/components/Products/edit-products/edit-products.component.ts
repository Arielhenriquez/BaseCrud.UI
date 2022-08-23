import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  @Input() product?: Products;
  @Output() productsUpdated = new EventEmitter<Products[]>();

  constructor(private baseService: ProductServiceService) { }

  ngOnInit(): void {
  }

  createProduct(product: Products) {
    this.baseService
      .createProduct(product)
      .subscribe((products: Products[]) => this.productsUpdated.emit(products))
  }

  updateProduct(product: Products) {
    this.baseService
      .updateProduct(product)
      .subscribe((products: Products[]) => this.productsUpdated.emit(products))
  }

  deleteProduct(product: Products) {
    this.baseService
      .deleteProduct(product)
      .subscribe((products: Products[]) => this.productsUpdated.emit(products))
  }
}
