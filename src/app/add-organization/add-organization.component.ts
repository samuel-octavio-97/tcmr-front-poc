import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup,FormBuilder, Form } from '@angular/forms';
import { OrganizationService } from '../organization.service';
import { Organization, OrganizationDto } from '../Organization';
import { OrganizationManagementComponent } from '../organization-management/organization-management.component';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.css']
})
export class AddOrganizationComponent implements OnInit {

 

  @Input() tcmrAddForm!: FormGroup;
  @Output() formSubmitted = new EventEmitter<void>();


  constructor(){}

  ngOnInit(): void {
   
  }


  onFormSubmit() {
    // Your form handling logic here
    this.formSubmitted.emit();
  }

}
