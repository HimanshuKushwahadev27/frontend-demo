import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RoomList } from '../roomInterface';
import { RoomsService } from '../services/rooms';
@Component({
  selector: 'app-rooms-create',
  standalone: true,
  imports: [  
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    CommonModule,
    
  ],
  templateUrl: './rooms-create.html',
  styleUrl: './rooms-create.scss',
})
export class RoomsCreate {



  private fb = inject(FormBuilder);
  private roomService  = inject(RoomsService);

  roomForm = this.fb.group({
    roomType: ['', Validators.required],
    amenities: [''],
    price: [0, [Validators.required, Validators.min(0)]],
    url: [''],
    checkOutTime: ['', Validators.required],
    ratings: [0, [Validators.min(0), Validators.max(5)]]
  });
  
  room : RoomList ={
        roomType : '',
        amenities : '',
        price : 0,
        photos: '',
        checkOutTime: '',
        ratings : 0
  }

  successMessage = false;
  onSubmit() {
      const formValue = this.roomForm.value;

    const room: RoomList = {
    roomType: formValue.roomType!,
    amenities: formValue.amenities!,
    price: formValue.price!,
    photos: formValue.url!,
    checkOutTime: new Date(formValue.checkOutTime!).toISOString(),
    ratings: formValue.ratings!
  };

  this.roomService
      .addRoom(room)
      .subscribe({
        next: () =>{
          this.successMessage = true;
          this.roomForm.reset();
        },
    error: (err) => {
      console.error("Room creation failed", err);
    }
      })
  }
}
