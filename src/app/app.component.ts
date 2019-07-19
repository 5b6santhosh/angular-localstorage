import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

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
   // alert(n);
        this.items.splice(n);
     alert(JSON.stringify(this.items));
    localStorage.setItem("productList",JSON.stringify(this.items));
    this.ngOnInit();
    
  }
}
