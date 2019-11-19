import { Employee } from './../../shared/employee';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : any  =[];
  constructor(
    private srvc: RestApiService
    ) {
    
  }

  ngOnInit() {
    this.loadEmployess();
  }

  loadEmployess() {
    return this.srvc.get().subscribe(data => {
      this.employees = data;
    });
  }
  deleteEmployee(id){
   this.srvc.delete(id).subscribe( data=>{
       this.loadEmployess();
   })
  }

}
