import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['PHP', '.Net', 'Java'];

  public doughnutChartData: MultiDataSet = [
    [250, 150, 100],
    [160, 150, 130],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';
/******************************************************* */

lineChartData: ChartDataSets[] = [
  { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
];
lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];
lineChartOptions = {
  responsive: true,
};
lineChartColors: Color[] = [
  {
    borderColor: 'black',
    backgroundColor: 'rgba(255,255,0,0.28)',
  },
];
lineChartLegend = true;
lineChartPlugins = [];
lineChartType: ChartType = 'line';

  constructor() { }

  ngOnInit(): void {
  }

}

