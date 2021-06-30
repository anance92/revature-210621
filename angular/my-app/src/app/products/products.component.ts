import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  products = []

  status = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Online')
    }, 2000);
  })

  title:string = ''

  service:ProductService

  constructor(service:ProductService){
    this.service = service
    console.log('constructor called')
  }

  ngOnInit(){
    console.log('onInit called')
    this.products = this.service.getProducts()
    //call and API and update the products
    //make HTTP request
  }

  ngDoCheck(){
    console.log('doCheck called')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(){
    console.log('onDestroy called')
  }

  updateTitle(e:Event){
    this.title = (<HTMLInputElement> e.target).value
  }

  onAdd(){
    this.service.addProduct({title:this.title})
  }

  // showAll:boolean = true
  // signal:string = 'YELLOW'

  // toggle(){
  //   this.showAll = !this.showAll
  // }

  onDelete(title:string){
    this.service.deleteProduct(title)
    this.products = this.service.getProducts()
  }
 
}
