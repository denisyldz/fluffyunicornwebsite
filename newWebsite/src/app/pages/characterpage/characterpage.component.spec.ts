import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterpageComponent } from './characterpage.component';

describe('CharacterpageComponent', () => {
  let component: CharacterpageComponent;
  let fixture: ComponentFixture<CharacterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
