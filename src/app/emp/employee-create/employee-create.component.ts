import { Employee } from './../../shared/employee';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
 emp:Employee ;
  constructor(private srvc: RestApiService , private router: Router) { }
 
  ngOnInit() {
    this.emp= new Employee();
    this.emp.name='';
    this.emp.phone=0;
    this.emp.email=''
  }
   addEmployee(){     
      this.srvc.create(this.emp).subscribe(data=>{
          this.router.navigate(['/list-emp'])
      })
   }
}
