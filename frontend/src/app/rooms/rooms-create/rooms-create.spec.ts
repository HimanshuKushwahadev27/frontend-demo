import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsCreate } from './rooms-create';

describe('RoomsCreate', () => {
  let component: RoomsCreate;
  let fixture: ComponentFixture<RoomsCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
