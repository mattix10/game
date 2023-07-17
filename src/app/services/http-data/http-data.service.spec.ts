import { TestBed } from '@angular/core/testing';
import { HttpDataService } from './http-data.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Person } from 'src/models/Person';
import { environment } from 'src/environments/environment';
import { peopleDataResponseMock, peopleMock } from 'src/mocks/people';
import { Starship } from 'src/models/Starship';
import { starshipsDataResponseMock, starshipsMock } from 'src/mocks/starships';

describe('HttpDataService', () => {
  let service: HttpDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpDataService],
    });
    service = TestBed.inject(HttpDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getPeople and return list of two people', () => {
    let peopleData: Person[] | undefined;

    service.getPeople([3, 1]).subscribe((newPeople: Person[]) => {
      peopleData = newPeople;
    });

    const req1 = httpMock.expectOne(`${environment.API_URL}/people/3`);
    const req2 = httpMock.expectOne(`${environment.API_URL}/people/1`);

    expect(req1.request.method).toBe('GET');
    expect(req2.request.method).toBe('GET');

    req1.flush(peopleDataResponseMock[0]);
    req2.flush(peopleDataResponseMock[1]);

    expect(peopleData).toEqual([peopleMock[0], peopleMock[1]]);
  });

  it('should call getStarship and return list of two starships', () => {
    let starshipsData: Starship[] | undefined;

    service.getStarships([6, 2]).subscribe((newStarships: Starship[]) => {
      starshipsData = newStarships;
    });

    const req1 = httpMock.expectOne(`${environment.API_URL}/starships/6`);
    const req2 = httpMock.expectOne(`${environment.API_URL}/starships/2`);

    expect(req1.request.method).toBe('GET');
    expect(req2.request.method).toBe('GET');

    req1.flush(starshipsDataResponseMock[0]);
    req2.flush(starshipsDataResponseMock[1]);

    expect(starshipsData).toEqual([starshipsMock[0], starshipsMock[1]]);
  });
});
