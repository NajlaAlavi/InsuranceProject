import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeSearchComponent } from './ae-search.component';

describe('AeSearchComponent', () => {
  let component: AeSearchComponent;
  let fixture: ComponentFixture<AeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
