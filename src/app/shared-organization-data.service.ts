import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Organization, OrganizationDto } from './Organization';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedOrganizationDataService {

  
  private organizationsData: Organization[] = [];

  private organizationsDataSubject = new BehaviorSubject<OrganizationDto[]>(this.organizationsData);



  get organizationsData$(): Observable<OrganizationDto[]> {
    return this.organizationsDataSubject.asObservable();
  }



  updateOrganizationsData(organizations: Organization[]): void {
    this.organizationsData = organizations;
    this.organizationsDataSubject.next(this.organizationsData);
  }
}
