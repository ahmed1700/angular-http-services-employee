import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Employee } from './employee';
import { retry, catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  restAPiURL = 'http://localhost:3000/employees';


  httpOptions = {
    headers : new HttpHeaders({
      'content-type' : 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  get(): Observable<Employee> {
    return this.http.get<Employee>(this.restAPiURL)
      .pipe
      (
        retry(1),
        catchError(this.handleError)
      )
  }
  getById(id): Observable<Employee> {
    return this.http.get<Employee>(this.restAPiURL + '/' + id)
      .pipe
      (
        retry(1),
        catchError(this.handleError)
      )
  }
  create(employee): Observable<Employee> {
    return this.http.post<Employee>(this.restAPiURL, JSON.stringify(employee),this.httpOptions )
      .pipe
      (
        retry(1),
        catchError(this.handleError)
      )

  }
  delete(id) {
    return this.http.delete<Employee>(this.restAPiURL + '/' + id)
      .pipe
      (
        retry(1),
        catchError(this.handleError)
      )
  }
  update(id, employee) {
    return this.http.put<Employee>(this.restAPiURL + '/' + id, JSON.stringify(employee) ,this.httpOptions)
      .pipe
      (
        retry(1),
        catchError(this.handleError)
      )
  }
  handleError(error) {
    let erorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // get client side error
      erorMessage = error.error.message;
    }
    else {
      // get server side error
      erorMessage = ` Error Code  : ${error.status} \n  Error Message : ${error.message}`
    }
    window.alert(erorMessage);
    return throwError(erorMessage);
  }
}
