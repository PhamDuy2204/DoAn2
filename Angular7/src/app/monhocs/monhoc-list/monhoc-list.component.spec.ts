import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonhocListComponent } from './monhoc-list.component';

describe('MonhocListComponent', () => {
  let component: MonhocListComponent;
  let fixture: ComponentFixture<MonhocListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonhocListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonhocListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
