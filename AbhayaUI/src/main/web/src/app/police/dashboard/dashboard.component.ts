import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HorizontalBarChart } from '../../shared/util/horizontalbar';
import { PieChart } from '../../shared/util/piechart';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  horizontalBarChart: HorizontalBarChart = new HorizontalBarChart([636, 375], true, true, true, false, false, false, true,
      'Label of X', 'Label of Y');
  pieChart: PieChart = new PieChart([400, 280], true, false, false, true, false, 'below', '0.35', '');

  // https://plnkr.co/edit/BooZfKJz0nLATpTe1SwH?p=preview
  constructor(private router: Router) {

    this.horizontalBarChart.data = [
                                { 'name': 'Anantapur', 'value': 8940000},
                                { 'name': 'Chittor', 'value': 5000000},
                                { 'name': 'East Godavari', 'value': 7200000},
                                { 'name': 'Guntur', 'value': 5000000},
                                { 'name': 'Ysr Kadapa', 'value': 7200000},
                                { 'name': 'Krishna', 'value': 5000000},
                                { 'name': 'Kurnool', 'value': 7200000},
                                { 'name': 'Nellore', 'value': 5000000},
                                { 'name': 'Prakasam', 'value': 7200000},
                                { 'name': 'Srikakulam', 'value': 5000000},
                                { 'name': 'Vishkapatnam', 'value': 7200000},
                                { 'name': 'Vizianagaram', 'value': 5000000},
                                { 'name': 'West Godavari', 'value': 7200000}
                              ];
    this.horizontalBarChart.colorScheme = { domain: ['#26a1ee'] };

    this.pieChart.data = [
      { 'name': 'Stopped', 'value': 89400},
      {'name': 'Running', 'value': 5000},
      {'name': 'Completed', 'value': 720}
    ];

    this.pieChart.colorScheme =  {domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']};
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

  openTrip() {
    this.router.navigate(['/police/closedtrips']);
  }

}
