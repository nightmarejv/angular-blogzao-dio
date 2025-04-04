import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuningGuideComponent } from './tuning-guide.component';

describe('TuningGuideComponent', () => {
  let component: TuningGuideComponent;
  let fixture: ComponentFixture<TuningGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TuningGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuningGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
