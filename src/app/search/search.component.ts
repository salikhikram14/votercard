import { Component, OnInit } from '@angular/core';
import { RegistrationserviceService } from '../service/registrationservice.service';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  voters;
  searchText;
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: string = 'bar';
  public pieChartColors: any[] = [{  backgroundColor: ['#3B55E6', '#EB4E36', '#43D29E', '#32CBD8', '#E8C63B', '#28C63B', '#38C63B', '#48C63B', '#58C63B', '#68C63B', '#78C63B'] }]
  example = new Array();


  constructor(private registrationService: RegistrationserviceService) { }

  ngOnInit(): void {

  }

  getDetails() {
    this.registrationService.getVoters().subscribe((data: any[]) => {
      this.voters = data;
      data.forEach(el => {
        this.example.push(el.state);
        if (!this.pieChartLabels.includes(el.state)) {
          this.pieChartLabels.push(el.state)
        }
      })
      let result = Object.values(this.example.reduce((c, v) => {
        c[v] = c[v] || [v, 0];
        c[v][1]++;
        return c;
      },{})).map(o=>( o[1]));
      this.pieChartData=Object.assign([],result);
    });

  }
  download(voter) {
    const doc = new jsPDF();
    doc.text('Voter Card', 95, 20);
    doc.text('Name: ' + voter.name, 20, 30);
    doc.text('Father Name: ' + voter.fatherName, 20, 40);
    doc.text('Gender: ' + voter.gender, 20, 50);
    doc.text('Date-of-birth: ' + voter.dateOfBirth, 20, 60);
    doc.text('Area: ' + voter.area, 20, 70);
    doc.text('City: ' + voter.city, 20, 80);
    doc.text('State: ' + voter.state, 20, 90);
    doc.addImage(voter.photo, 140, 30, 65, 65)

    doc.save("voter-card.pdf");
  }
}
