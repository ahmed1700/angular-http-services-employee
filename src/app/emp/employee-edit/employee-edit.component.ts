import { Employee } from './../../shared/employee';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  empid =this.activeRoute.snapshot.params['id'];
  emp: Employee;
  constructor(
    private srvc: RestApiService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }
 
  ngOnInit() {
    this.emp = new Employee();
    this.getEmployeeByid(this.empid);
  }
  getEmployeeByid(id) {
    return this.srvc.getById(id).subscribe(data => {
      this.emp = data;
    })
  }
  updateEmployee(){
       if (window.confirm('Are you Sure , You want to update this Employee')) {
         this.srvc.update(this.empid,this.emp).subscribe(data=>{
           this.router.navigate(['/list-emp']);
         })
       }
  }
}
