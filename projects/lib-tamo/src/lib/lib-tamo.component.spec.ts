import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibTamoComponent } from './lib-tamo.component';

describe('LibTamoComponent', () => {
  let component: LibTamoComponent;
  let fixture: ComponentFixture<LibTamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibTamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibTamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
