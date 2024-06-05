import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCobrosComponent } from './lista-cobros.component';

describe('ListaCobrosComponent', () => {
  let component: ListaCobrosComponent;
  let fixture: ComponentFixture<ListaCobrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCobrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCobrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
