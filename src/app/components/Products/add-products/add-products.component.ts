import { Component } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductServiceService } from 'src/app/services/product-service.service';


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  products: Products[]=[];
  productToEdit?: Products;

  constructor(private productService: ProductServiceService  ) { }

  ngOnInit(): void {
      this.productService
      .getProducts()
      .subscribe((results: Products[]) => (this.products = results))
  }

  initNewProduct() {
    this.productToEdit = new Products();
  }

  updateProductList(products: Products[]) {
    this.products = products;
  }

  editProduct(products: Products) {
    this.productToEdit = products;
  }
}
