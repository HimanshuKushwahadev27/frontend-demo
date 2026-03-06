import { AsyncPipe } from '@angular/common';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UUID } from 'crypto';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-room-booking',
  imports: [AsyncPipe],
  templateUrl: './room-booking.html',
  styleUrl: './room-booking.scss',
})
export class RoomBooking implements OnInit {

  private router = inject(ActivatedRoute);

  id !: UUID;
  id$ = this.router.params.pipe(
    map(params => params['id'])
    )

  ngOnInit(): void {
    // this.router.params.subscribe((param) => {this.id = param['id']});
    // this.id$ = this.router.params.pipe(
    // map(params => params['id'])
    // )
  }
}
