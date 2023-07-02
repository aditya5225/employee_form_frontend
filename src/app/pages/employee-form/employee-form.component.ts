import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute, private router: Router) { }

  employeeForm!: FormGroup;
  submitted: boolean = true;
  loading: boolean = true;
  isAddMode: boolean = true;
  paramsId: any;
  employeedata: any;

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      firstname: new FormControl(""),
      lastname: new FormControl(""),
      emp_contact: new FormControl(""),
      address: new FormControl(""),
      emp_salary: new FormControl(""),
      emp_email: new FormControl(""),

    });

    this.paramsId = this.route.snapshot.params['id']
    if (this.paramsId) {
      this.employeeService.getById(this.paramsId).subscribe(emp => {
        this.isAddMode = false;

        this.employeeForm.patchValue(emp[0])
      })
    }

  }

  onSubmit() {

    this.loading = true;
    if (this.isAddMode) {
      this.createVendorPo();
    } else {
      this.editVendorPo();
    }
  }
  createVendorPo() {
    this.employeeService.create(this.employeeForm.value).subscribe()
    this.router.navigateByUrl(`/employee_list`);
    // window.location.reload();
  }

  editVendorPo() {
    this.employeeService.update(this.employeeForm.value, this.paramsId).subscribe()
    window.location.reload();


  }

}
