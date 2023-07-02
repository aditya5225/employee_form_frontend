import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class EmployeeService {
    constructor(private router: Router, private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get<any>(`http://localhost:5000/employee/getAllEmp`).pipe(
            map((x) => {
                return x;
            })
        );;
    }

    getById(id: any): Observable<any> {
        return this.http.get<any>(`http://localhost:5000/employee/getOneEmp/${id}`).pipe(
            map((x) => {
                return x;
            })
        );;
    }

    create(data: any): Observable<any> {
        return this.http
            .post(`http://localhost:5000/employee/addEmployee`, data)
            .pipe(
                map((x) => {
                    return x;
                })
            );
    }

    update(data: any, id: any): Observable<any> {
        return this.http
            .patch(`http://localhost:5000/employee/updateEmployee/${id}`, data)
            .pipe(
                map((x) => {
                    return x;
                })
            );
    }

    delete(id: number) {
        return this.http.delete(`http://localhost:5000/employee/deleteOneEmployee/${id}`).pipe(
            map((x) => {
                return x;
            })
        );
    }

    deleteAllData(){
        return this.http.delete(`http://localhost:5000/employee/deleteAllEmployee`).pipe(
            map((x) => {
                return x;
            })
        );
    }
}

