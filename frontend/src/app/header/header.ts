import { Component, OnInit } from '@angular/core';
import { Init } from 'v8';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit{

  title: string = '';

  constructor(){}

  ngOnInit(): void {
  }
}
