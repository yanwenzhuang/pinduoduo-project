import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WowTestComponent } from './wow-test.component';

describe('WowTestComponent', () => {
  let component: WowTestComponent;
  let fixture: ComponentFixture<WowTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WowTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WowTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
