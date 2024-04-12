import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPlantillaPersonalComponent } from './tabla-plantilla-personal.component';

describe('TablaPlantillaPersonalComponent', () => {
  let component: TablaPlantillaPersonalComponent;
  let fixture: ComponentFixture<TablaPlantillaPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaPlantillaPersonalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaPlantillaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
