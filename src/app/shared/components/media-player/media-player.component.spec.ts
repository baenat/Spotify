import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaplayerComponent } from './media-player.component';

describe('MediaplayerComponent', () => {
  let component: MediaplayerComponent;
  let fixture: ComponentFixture<MediaplayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaplayerComponent]
    });
    fixture = TestBed.createComponent(MediaplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
