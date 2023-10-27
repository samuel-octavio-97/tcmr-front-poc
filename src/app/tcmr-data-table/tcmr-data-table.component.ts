import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { Organization } from '../Organization';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-tcmr-data-table',
  templateUrl: './tcmr-data-table.component.html',
  styleUrls: ['./tcmr-data-table.component.css']
})
export class TcmrDataTableComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['name', 'nsc_code', 'dealer_visible', "edit"];


  @Input() dataSource!: MatTableDataSource<Organization>

  @Output() openDialogRequested = new EventEmitter<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;




  constructor() { }


  ngOnInit(): void {
   
}

openDialog(rowData: any) {
  this.openDialogRequested.emit(rowData);
}




ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}


}
