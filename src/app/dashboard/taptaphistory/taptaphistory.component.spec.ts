import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaptaphistoryComponent } from './taptaphistory.component';

describe('TaptaphistoryComponent', () => {
  let component: TaptaphistoryComponent;
  let fixture: ComponentFixture<TaptaphistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaptaphistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaptaphistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
