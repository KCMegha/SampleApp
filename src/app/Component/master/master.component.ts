import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  employees : Employee[] = [];
  selectedEmp : Employee = {} as Employee;

  ngOnInit() : void{
    this.employees.push({Id : 1, Name : "Megha", Address : "Chikamagalur", Salary : 20000, Pic:"./assets/Images/indu.jfif" });
    this.employees.push({Id : 2, Name : "Priyanka", Address : "Kundapura", Salary : 25000, Pic:"./assets/Images/chutki.png" });

    this.employees.push({Id : 3, Name : "Chethan", Address : "Kolar", Salary : 30000, Pic:"./assets/Images/Khaliya.jfif" });

    this.employees.push({Id : 4, Name : "Dileep Reddy", Address : "Andhra", Salary : 35000, Pic:"./assets/Images/raju.png" });

    this.employees.push({Id : 5, Name : "Deepthi", Address : "Tamil Nadu", Salary : 45000, Pic:"./assets/Images/bolu.png" });

    this.employees.push({Id : 6, Name : "Soujanya", Address : "Hubli", Salary : 67000, Pic:"./assets/Images/dolu.jfif" });

  }

  onEdit(emp: Employee){
    this.selectedEmp = emp;
  }
}
