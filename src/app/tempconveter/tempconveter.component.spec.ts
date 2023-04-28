import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempconveterComponent } from './tempconveter.component';

describe('TempconveterComponent', () => {
  let component: TempconveterComponent;
  let fixture: ComponentFixture<TempconveterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempconveterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempconveterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
