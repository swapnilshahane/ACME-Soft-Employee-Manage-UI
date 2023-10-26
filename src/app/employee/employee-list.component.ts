import { Component, OnDestroy, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { Subscription } from 'rxjs';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  employees: IEmployee[] = [];
  errorMessage = '';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.sub = this.employeeService.getEmployees().subscribe({
      next: employees => {
        this.employees = employees;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  deleteEmployee(employee: IEmployee) {
    this.employeeService.deleteEmployee(employee.employeeId).subscribe(() => {
      this.employees = this.employees.filter(employee => employee.employeeId !== employee.employeeId);
    });
  }
}
