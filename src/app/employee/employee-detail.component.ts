import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService) { }

  onSubmit() {
    this.employeeService.postEmployee(this.employee).subscribe(
      data => {
        console.log(data);
        this.employee = new Employee();
      },
      error => {
        console.log(error);
      }
    );
  }
}
