import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProcedurePage } from './procedure.page';

describe('ProcedurePage', () => {
  let component: ProcedurePage;
  let fixture: ComponentFixture<ProcedurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcedurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
