import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { Rooms } from './rooms/rooms';
import { EphemeralKeyInfo } from 'tls';
import { ɵEmptyOutletComponent } from "@angular/router";
import { Container } from "./container/container";
import { Employee } from "./employee/employee";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [Rooms, Container, Employee],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('hotelinventoryapp');

  @ViewChild('name' , {static: true}) name !: ElementRef;
  ngOnInit(): void {
    this.name.nativeElement.innerText='Shanton Hotel';
  }
  // @ViewChild('user', {read : ViewContainerRef} ) vcr !: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(Rooms);
  // }
}
