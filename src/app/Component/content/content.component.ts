import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  title : string = "Welcome to the Angular training";
  value1 : number = 123;
  value2 : number = 321;
  result : number = this.value1 + this.value2;

  onClick = () =>{
    alert("This is a function in Typescript");
  }

  onAddFunc(){
    this.value1 = Number(prompt("Enter the first value"));
    this.value2 = Number(prompt("Enter the second value"));
    this.result = this.value1 + this.value2;
  }
}
