import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MphotoComponent } from './mphoto.component';

describe('MphotoComponent', () => {
  let component: MphotoComponent;
  let fixture: ComponentFixture<MphotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MphotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
