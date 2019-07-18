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

  // alert(JSON.stringify(list));
   
    this.array.push(list);
    this.items= JSON.parse(localStorage.getItem("productList"));
   localStorage.setItem("productList", JSON.stringify(this.array));

   //this.restform();
  this.ngOnInit();
 }
  restform(){
    this.name="";
  }
}
