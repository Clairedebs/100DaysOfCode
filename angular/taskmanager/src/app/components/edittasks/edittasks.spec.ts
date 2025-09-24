import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edittasks } from './edittasks';

describe('Edittasks', () => {
  let component: Edittasks;
  let fixture: ComponentFixture<Edittasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Edittasks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Edittasks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
