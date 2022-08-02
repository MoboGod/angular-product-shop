import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from './models/products';
import { ProductsService } from './services/products.service';
// import { products as data } from './data/products';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular app';
  loading = false;
  products$: Observable<IProduct[]>;
  term = '';

  // products: IProduct[] = [];

  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.ProductsService.getAll().pipe(
      tap(() => (this.loading = false))
    );
    // this.ProductsService.getAll().subscribe((products) => {
    //   this.products = products;
    //   this.loading = false;
    // });
  }
}
