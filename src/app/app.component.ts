import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  total:number=1;
 public array:any=[];
public items:any=['name'];
 ngOnInit(){
 this.items= JSON.parse(localStorage.getItem("productList"));
 }
 n(name){
   let list={
     name:name
   };
    this.array.push(list);
    this.items= JSON.parse(localStorage.getItem("productList"));
   localStorage.setItem("productList", JSON.stringify(this.array));  
  this.ngOnInit();
 }
  k(name,all){
     let list={
     name:name
   };
   all.push(list);
   //alert(JSON.stringify(all));
   localStorage.setItem("productList",JSON.stringify(all));
   this.ngOnInit();
  }
  delete(n){
   
     let productList = JSON.parse(localStorage.getItem("productList"));
   alert(n);
  for(let i = 0; i < productList.length; i++){
    if (productList[i].name === n) {
      productList.splice(i,1);    
    }
  }
      
   localStorage.setItem("productList", JSON.stringify(productList));
    this.ngOnInit();
    
  }
}
