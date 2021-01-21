import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  currentCategoryId: number = 1;
  searchMode: boolean = false;
  thePageNumber: number = 1;
  thePageSize: number = 5;
  previousKeyword:string = null;
  theTotalElements: number = 0;
  previousCategoryId: number = 1;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts()
    });
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      this.handleSearchProducts();
    } else
      this.handleListProducts();
  }

  handleListProducts() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get("id");
    }
    else {
      this.currentCategoryId = 1;
    }

    if (this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;

    }

    this.previousCategoryId = this.currentCategoryId;

    console.log(`currentCategoryId=${this.currentCategoryId}`);

    this.productService.getProductListPaginate(this.thePageNumber - 1, this.thePageSize, this.currentCategoryId).subscribe(this.processResult());

   
    
  }
  processResult() {
   return data=> {
     this.products=data._embedded.products;
     this.thePageNumber=data.page.number+1;
     this.thePageSize=data.page.size;
     this.theTotalElements=data.page.totalElements;
   }
  }

  handleSearchProducts() {
    const thekeyword: string = this.route.snapshot.paramMap.get('keyword');
   
    if(this.previousKeyword!=thekeyword){
      this.thePageNumber=1;

    }
    this.previousKeyword=thekeyword;

this.productService.searchProductPaginate(this.thePageNumber-1,
                                          this.thePageSize,
                                          thekeyword).subscribe(this.processResult());

  }
  updatePageSize(pageSize: number){
    this.thePageSize=pageSize;
    this.thePageNumber=1;
    this.listProducts();
  }

}

