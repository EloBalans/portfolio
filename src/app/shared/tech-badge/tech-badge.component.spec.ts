import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechBadgeComponent } from './tech-badge.component';

describe('TechBadgeComponent', () => {
  let component: TechBadgeComponent;
  let fixture: ComponentFixture<TechBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
