import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { Rooms } from './rooms/rooms';
import { EphemeralKeyInfo } from 'tls';
import { RouterLink, RouterModule, RouterOutlet, ɵEmptyOutletComponent } from "@angular/router";
import { Container } from "./container/container";
import { Employee } from "./employee/employee";
import { HttpClient } from '@angular/common/http';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
@Component({
  selector: 'app-root',
  imports: [Rooms, Container, Employee, RouterOutlet, RouterLink, AppNavigationComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App  {
  protected readonly title = signal('hotelinventoryapp');

  // @ViewChild('name' , {static: true}) name !: ElementRef;
  // ngOnInit(): void {
  //   this.name.nativeElement.innerText='Shanton Hotel';
  // }
  // @ViewChild('user', {read : ViewContainerRef} ) vcr !: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(Rooms);
  // }
}
