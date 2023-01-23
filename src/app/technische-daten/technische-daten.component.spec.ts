import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnischeDatenComponent } from './technische-daten.component';

describe('TechnischeDatenComponent', () => {
  let component: TechnischeDatenComponent;
  let fixture: ComponentFixture<TechnischeDatenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnischeDatenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnischeDatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
