import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPedidoComponent } from './nav-bar-pedido.component';

describe('NavBarPedidoComponent', () => {
  let component: NavBarPedidoComponent;
  let fixture: ComponentFixture<NavBarPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
