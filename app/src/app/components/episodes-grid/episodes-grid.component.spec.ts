import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { EpisodesService } from '../../services/episode/episode.service';
import { EpisodesGridComponent } from './episodes-grid.component';

class EpisodesServiceStub {
  fetchEpisodes() {
    return of([]);
  }
}

describe('EpisodesGridComponent', () => {
  let component: EpisodesGridComponent;
  let fixture: ComponentFixture<EpisodesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodesGridComponent],
      providers: [{ provide: EpisodesService, useClass: EpisodesServiceStub }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpisodesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
