import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { of } from "rxjs";
import { Organization, OrganizationDto, OrganizationEditDto } from './Organization';



@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http:HttpClient){}

  TCMR_API = "http://localhost:3000"



  organizations(): Observable<Organization[]>  {

    return this.http.get<Organization[]>(`${this.TCMR_API}/organizations`).pipe(
    
      catchError(this.handleError<Organization[]>('restaurants', []))
    )
  }


  addOrganization(body: OrganizationDto): Observable<Organization>{
    return this.http.post(`${this.TCMR_API}/organizations`, body) as Observable<Organization>
  }


  editOrganization(id:number | string ,body: OrganizationEditDto): Observable<Organization>{
    return this.http.patch(`${this.TCMR_API}/organizations/${id}`, body) as Observable<Organization>
  }



  searchOrganization(queryParams: any): Observable<Organization[]>  {


    return this.http.get<Organization[]>(`${this.TCMR_API}/organizations`, {params:queryParams}).pipe(
    
      catchError(this.handleError<Organization[]>('restaurants', []))
    )
  }




    private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error.status); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
