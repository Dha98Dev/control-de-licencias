import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoVacanciasComponent } from './catalogo-vacancias.component';

describe('CatalogoVacanciasComponent', () => {
  let component: CatalogoVacanciasComponent;
  let fixture: ComponentFixture<CatalogoVacanciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoVacanciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogoVacanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
