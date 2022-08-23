import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Brands } from 'src/app/models/brands';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
@Input() brand?: Brands;
@Output() brandsUpdated = new EventEmitter<Brands[]>();

  constructor(private baseService: BaseService) { }

  ngOnInit(): void {
  }

  createBrand(brand: Brands){ 
   this.baseService
   .createBrand(brand)
   .subscribe((brands: Brands[]) => this.brandsUpdated.emit(brands))
  }

  updateBrand(brand: Brands){ 
    this.baseService
    .updateBrand(brand)
    .subscribe((brands: Brands[]) => this.brandsUpdated.emit(brands))
  }

  deleteBrand(brand: Brands){ 
    this.baseService
    .deleteBrand(brand)
    .subscribe((brands: Brands[]) => this.brandsUpdated.emit(brands))
  }
}
