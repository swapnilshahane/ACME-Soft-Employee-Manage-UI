import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError, map } from "rxjs";

import { IEmployee } from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeUrl = 'https://localhost:7053/api/Employee';
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.employeeUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getEmployee(id: number): Observable<IEmployee> {
    return this.http.get<IEmployee>(`${this.employeeUrl}/${id}`)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  postEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(this.employeeUrl, employee)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteEmployee(id: number) : Observable<unknown>{
    return this.http.delete(`${this.employeeUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

    private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
