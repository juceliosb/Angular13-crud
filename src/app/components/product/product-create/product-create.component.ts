import { Product } from './product.model';
import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    codigo: 0,
    nome:''
    
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Banco Cadastrado!')
      this.router.navigate(['/products'])
    })
    
  }
  
  cancel(): void{
    this.router.navigate(['/products'])
  }  
}
