import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";
import { Employee } from '../employee/employee';
@Component({
  selector: 'app-container',
  imports: [ɵEmptyOutletComponent,Employee ],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export class Container implements AfterContentInit{

  @ContentChild(Employee) employee !: Employee;

  constructor(){}

  ngAfterContentInit(): void {
    console.log(this.employee);
  }
}
