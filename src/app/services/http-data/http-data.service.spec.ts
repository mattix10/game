import { TestBed } from '@angular/core/testing';
import { HttpDataService } from './http-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('HttpDataService', () => {
  let service: HttpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpDataService],
    });
    service = TestBed.inject(HttpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getPeople and return list of two elements with people');

  it('should call getStarship and return list of two elements with people');
});
