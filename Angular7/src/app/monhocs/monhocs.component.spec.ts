import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonhocsComponent } from './monhocs.component';

describe('MonhocsComponent', () => {
  let component: MonhocsComponent;
  let fixture: ComponentFixture<MonhocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonhocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonhocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
