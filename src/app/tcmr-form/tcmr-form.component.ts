import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup,FormBuilder, Form } from '@angular/forms';
import { OrganizationService } from '../organization.service';
import { HttpParams } from '@angular/common/http';
import { Organization } from '../Organization';

@Component({
  selector: 'app-tcmr-form',
  templateUrl: './tcmr-form.component.html',
  styleUrls: ['./tcmr-form.component.css']
})
export class TcmrFormComponent implements OnInit {


  tcmrForm!: FormGroup;


  @Output() getData = new EventEmitter();

  constructor(private formBuilder:FormBuilder, private organizationService : OrganizationService){}

  ngOnInit(): void {
    this.tcmrForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
      nsc_code:  this.formBuilder.control(''),
      dealer_visible: this.formBuilder.control(false),
      created:  this.formBuilder.control(''),
      createdBy:  this.formBuilder.control(''),
    })
  }


  onSubmit(){

 
    const submitData: any  = {
      name : this.tcmrForm.value.name.trim(),
      nsc_code : this.tcmrForm.value.nsc_code.trim(),
      dealer_visible : this.tcmrForm.value.dealer_visible,
      created : this.tcmrForm.value.created,
      createdBy : this.tcmrForm.value.createdBy.trim(),
    }


    let params = new HttpParams();
  

    for (const key of Object.keys(submitData)) {
      const value = submitData[key];
      if (!!value) {
        params = params.append(key, value);
      }
    }
  
    this.getData.emit(params);
  }

}
