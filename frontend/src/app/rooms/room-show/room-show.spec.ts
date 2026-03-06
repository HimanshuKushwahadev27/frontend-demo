import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomShowComponent } from './room-show';

describe('RoomShow', () => {
  let component: RoomShowComponent;
  let fixture: ComponentFixture<RoomShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomShowComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
