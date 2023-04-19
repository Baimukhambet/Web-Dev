import {Component, OnInit} from '@angular/core';
import {Company} from "../models";
import {CompanyService} from "../service/company.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{
  companies: Company[] = [];
  constructor(private CompanyService: CompanyService) {
  }
  ngOnInit() {
    this.CompanyService.getCompanies().subscribe((data)=>{
      this.companies = data;
    })
  }
}
