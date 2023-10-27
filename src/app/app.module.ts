import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TcmrDataTableComponent } from './tcmr-data-table/tcmr-data-table.component';
import { TcmrFormComponent } from './tcmr-form/tcmr-form.component'
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker'; 

import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import { OrganizationEditModalComponent } from './organization-edit-modal/organization-edit-modal.component';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { AddOrganizationComponent } from './add-organization/add-organization.component';
import { HttpClientModule } from '@angular/common/http';
import { OrganizationManagementComponent } from './organization-management/organization-management.component';




@NgModule({
  declarations: [
    AppComponent,
    TcmrDataTableComponent,
    TcmrFormComponent,
    OrganizationEditModalComponent,
    AddOrganizationComponent,
    OrganizationManagementComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    
    MatFormFieldModule,
     MatInputModule, 
     MatSelectModule,
    ReactiveFormsModule,
    MatGridListModule,
    NgbModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
