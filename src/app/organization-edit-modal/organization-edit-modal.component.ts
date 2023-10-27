import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrganizationEditDto } from '../Organization';
import { OrganizationService } from '../organization.service';




@Component({
  selector: 'app-organization-edit-modal',
  templateUrl: './organization-edit-modal.component.html',
  styleUrls: ['./organization-edit-modal.component.css']
})
export class OrganizationEditModalComponent implements OnInit  {


  tcmrEditForm!: FormGroup;



  

  constructor(
    private dialogRef: MatDialogRef<OrganizationEditModalComponent>,
    private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any ,
    private organizationService : OrganizationService
    ) {}


  ngOnInit(): void {
    this.tcmrEditForm = this.formBuilder.group({
      name: this.formBuilder.control(this.data.name,[Validators.required]),
      nsc_code:  this.formBuilder.control(this.data.nsc_code,[Validators.required]),
      dealer_visible: this.formBuilder.control(this.data.dealer_visible,[Validators.required])
    })
  }


  onEdit(){
    if (this.tcmrEditForm.valid) {

    const organizationData = new OrganizationEditDto(
      this.tcmrEditForm.value.name,
      this.tcmrEditForm.value.nsc_code,
      this.tcmrEditForm.value.dealer_visible,

    );;



    this.organizationService.editOrganization(this.data.id, organizationData)
    .subscribe(data => {
      this.closeDialog()
    })   
  }

  }





  closeDialog() {
    this.dialogRef.close();
  }

}
