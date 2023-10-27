import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Organization, OrganizationDto } from '../Organization';
import { OrganizationService } from '../organization.service';
import { OrganizationEditModalComponent } from '../organization-edit-modal/organization-edit-modal.component';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { catchError } from 'rxjs/operators';

import { of } from 'rxjs';

@Component({
  selector: 'app-organization-management',
  templateUrl: './organization-management.component.html',
  styleUrls: ['./organization-management.component.css']
})
export class OrganizationManagementComponent  implements OnInit {

  
  tcmrAddForm!: FormGroup;


  dataSource = new MatTableDataSource<Organization>();
 

  constructor(private formBuilder:FormBuilder, private dialog: MatDialog,private organizationService : OrganizationService) { }


  
  ngOnInit(): void {

    this.tcmrAddForm = this.formBuilder.group({
      name: this.formBuilder.control('',[Validators.required]),
      nsc_code:  this.formBuilder.control('',[Validators.required]),
      dealer_visible: this.formBuilder.control(false,[Validators.required]),
    })

   this.getOrganizationData()
   
  }



  getOrganizationData(){
    this.organizationService.organizations()
    .pipe(
      catchError(error => {
        console.log(error.message)
        return of([]);
      })
  )
    .subscribe((organizations) => {
    organizations.sort((a, b) => {
      return new Date(b.created).getTime() - new Date(a.created).getTime();
    })
    this.dataSource.data = organizations
  })
  }





  openDialog(rowData: any) {
    const dialogRef = this.dialog.open(OrganizationEditModalComponent, {
      width: '900px',
      data: rowData, 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.getOrganizationData()
      console.log(`Dialog result: ${result}`);
    });
  }



  onOpenDialogRequested(rowData: any) {
    this.openDialog(rowData);
  }



  onSubmit(){

    if (this.tcmrAddForm.valid) {

    const organizationData = new OrganizationDto(
      this.tcmrAddForm.value.name,
      this.tcmrAddForm.value.nsc_code,
      this.tcmrAddForm.value.dealer_visible,
      new Date().toISOString(),
      "Rita Ferreira",
    );

    this.organizationService.addOrganization(organizationData)
    .pipe(
      catchError(error => {
        console.log(error.message)
        return of([]);
      })
  )
    .subscribe(data => {
      this.getOrganizationData()
    })   
  }
  }



  searchOrganizations(queryParams:any){
    this.organizationService.searchOrganization(queryParams)
    .pipe(
      catchError(error => {
        console.log(error.message)
        return of([]);
      })
  )
    .subscribe((data) => {
      (this.dataSource.data = data)
    });
    
  }




}
