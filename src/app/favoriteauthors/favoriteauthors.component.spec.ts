import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteauthorsComponent } from './favoriteauthors.component';

describe('FavoriteauthorsComponent', () => {
  let component: FavoriteauthorsComponent;
  let fixture: ComponentFixture<FavoriteauthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteauthorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteauthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
