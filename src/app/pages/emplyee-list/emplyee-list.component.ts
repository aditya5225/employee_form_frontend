import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { EmployeeService } from 'src/app/service/employee.service';


@Component({
  selector: 'app-emplyee-list',
  templateUrl: './emplyee-list.component.html',
  styleUrls: ['./emplyee-list.component.css']
})
export class EmplyeeListComponent implements OnInit {
  public employeedata: any = []
  //  for search
  constructor(private employeeService: EmployeeService, private router: Router,) {
  }
  
  searchBoxTxt: string = '';

  ngOnInit(): void {
    this.employeeService.getAll().subscribe(emp => { this.employeedata = emp })
    // this.employeeService.getAll().subscribe(emp => console.log(emp))

  }

  edit(id: any) {
    console.log(id)
    this.router.navigateByUrl(`/employee_update/${id}`);
  }

  deleteButton(id: any) {
    this.employeeService.delete(id).subscribe();
    console.log("deleted")
    this.router.navigateByUrl(`/employee_list`);
    window.location.reload();
  }

  deleteAllData(){
    this.employeeService.deleteAllData().subscribe();
    console.log("deletedAll")
    window.location.reload();
  }
}
