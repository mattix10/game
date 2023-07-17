import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataResponse } from 'src/models/DataResponse';
import { Person } from 'src/models/Person';
import { Resource } from 'src/models/Resource';
import { Starship } from 'src/models/Starship';

@Injectable({
  providedIn: 'root',
})
export class HttpDataService {
  constructor(private httpClient: HttpClient) {}

  getPeople(numbers: number[]): Observable<Person[]> {
    return this.getData(numbers, Resource.Starships);
  }

  getStarships(numbers: number[]): Observable<Starship[]> {
    return this.getData(numbers, Resource.Starships);
  }

  private getData<T>(numbers: number[], resource: string): Observable<T[]> {
    let requests = numbers.map((number) =>
      this.httpClient.get<DataResponse<T>>(
        `${environment.API_URL}/${resource}/${number}`
      )
    );
    return forkJoin(requests).pipe(
      map((response) =>
        response.map(({ result: { properties } }) => properties)
      )
    );
  }
}
