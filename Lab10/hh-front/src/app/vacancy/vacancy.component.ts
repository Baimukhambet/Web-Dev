import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CompanyService} from "../service/company.service";
import {Vacancy} from "../models";
import {Observable, switchMap} from "rxjs";
import {Location} from "@angular/common";

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyService: CompanyService,
    private Location: Location
  ) {}

  vacancies: Vacancy[] = []
  id: string | null = ''

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('companyID');
    if (this.id) {
      this.companyService.getVacancies(this.id!).subscribe((data) => {
        if('error' in data){
          this.Location.replaceState("/companynotfound")
        }else{
          this.vacancies = data
        }
      })
    }
  }
}
