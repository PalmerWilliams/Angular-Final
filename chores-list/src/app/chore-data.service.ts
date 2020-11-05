import { Injectable, ɵɵinjectPipeChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Chore } from './chore';
import { parseTemplate } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ChoreDataService {

  url: string = "http://localhost:3000/chores";

  getChores(): Observable<Chore[]> {
    return this.http.get<Chore[]>(this.url);
  }

  getChore(id: number) : Observable<Chore> {
    return this.http.get<Chore>(this.url + "/" + id);
  }

  addChore(chore : Chore) : Observable<Chore> {
    return this.http.post<Chore>(this.url, chore);
  }

  deleateChore(id:number) : Observable<Chore> {
    return this.http.delete<Chore>(this.url + "/" + id);
  }

  editChore(chore: Chore): Observable<Chore> {
    return this.http.put<Chore>(this.url + "/" + chore.id, chore)
  }

  constructor(private http: HttpClient) { }
}
