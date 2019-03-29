import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingProductVpoDeleteComponent } from './sourcing-product-vpo-delete.component';

describe('SourcingProductVpoDeleteComponent', () => {
  let component: SourcingProductVpoDeleteComponent;
  let fixture: ComponentFixture<SourcingProductVpoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingProductVpoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingProductVpoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
