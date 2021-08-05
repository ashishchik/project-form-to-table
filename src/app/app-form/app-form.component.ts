import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {

  @ViewChild('spaForm') myForm: any;

  defaltLocation = 'delhi';
  gender = [
    {id : '1', value:"Male"},
    {id : '2', value:"Female"}
  ];

  location = [
    'Delhi', 'Gurugram', 'Noida', 'Jaipur', 'Banglor'
  ]

  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.dataService.tableData =[...this.dataService.tableData, this.myForm.value];
    this.router.navigate(['']);
   //this.formData.username = this.spaForm.value.userDetails.username;
  }


}
