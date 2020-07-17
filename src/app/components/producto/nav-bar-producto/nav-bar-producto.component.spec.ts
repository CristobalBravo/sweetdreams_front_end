import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarProductoComponent } from './nav-bar-producto.component';

describe('NavBarProductoComponent', () => {
  let component: NavBarProductoComponent;
  let fixture: ComponentFixture<NavBarProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
