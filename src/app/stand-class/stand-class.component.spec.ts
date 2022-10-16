import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandClassComponent } from './stand-class.component';

describe('StandClassComponent', () => {
  let component: StandClassComponent;
  let fixture: ComponentFixture<StandClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StandClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
