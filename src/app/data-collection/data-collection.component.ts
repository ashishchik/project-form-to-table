import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data-collection',
  templateUrl: './data-collection.component.html',
  styleUrls: ['./data-collection.component.css']
})
export class DataCollectionComponent implements OnInit {

  constructor(private dataService: DataService,
    private router: Router) { }

  public tableData: any;

  ngOnInit(): void {
    this.tableData = this.dataService.tableData;
  }

  public navigateToForm() {
    this.router.navigate(['/form']);
  }

  removeTable(item: any){
    this.tableData.splice(item, 1);
  }

}
