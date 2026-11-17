import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAmis } from './liste-amis';

describe('ListeAmis', () => {
  let component: ListeAmis;
  let fixture: ComponentFixture<ListeAmis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeAmis],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeAmis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});