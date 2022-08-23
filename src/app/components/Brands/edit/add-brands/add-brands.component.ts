import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/models/brands';
import { BaseService } from 'src/app//services/base.service';

@Component({
  selector: 'app-add-brands',
  templateUrl: './add-brands.component.html',
  styleUrls: ['./add-brands.component.css']
})
export class AddBrandsComponent implements OnInit {
  title = 'BaseCrud.UI';
  brands: Brands[] = [];
  brandToEdit?: Brands;

  constructor(private brandService: BaseService) { }

  ngOnInit(): void {
    this.brandService
      .getBrands()
      .subscribe((result: Brands[]) => (this.brands = result));
  }

  initNewBrand() {
    this.brandToEdit = new Brands();
  }

  updateBrandList(brands: Brands[]) {
    this.brands = brands;
  }

  editBrand(brand: Brands) {
    this.brandToEdit = brand;
  }

}
