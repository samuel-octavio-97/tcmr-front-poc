
export interface Organization {
    name: string;
    nsc_code: number;
    dealer_visible: boolean;
    created: string
    createdBy: string
  }



  export class OrganizationDto {
    name: string;
    nsc_code: number;
    dealer_visible: boolean;
    created: string
    createdBy: string


    constructor(name: string, nsc_code: number,dealer_visible: boolean, created: string, createdBy: string){
      this.name = name
      this.nsc_code = nsc_code
      this.dealer_visible = dealer_visible
      this.created = created
      this.createdBy = createdBy
    }
  }

  
  export class OrganizationEditDto {
    name: string;
    nsc_code: number;
    dealer_visible: boolean;


    constructor(name: string, nsc_code: number,dealer_visible: boolean){
      this.name = name
      this.nsc_code = nsc_code
      this.dealer_visible = dealer_visible
    }
  }