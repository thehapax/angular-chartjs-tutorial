import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Product A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Product B' }
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  lineChartOptions: ChartOptions = {
    responsive: true
  };
  lineChartColors: Color[] = [

    {
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
    {
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    }
  ];

  lineChartLegend = true;
  lineChartType = 'line';
  lineChartPlugins = [];

  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
