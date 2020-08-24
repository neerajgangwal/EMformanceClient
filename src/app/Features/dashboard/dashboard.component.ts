import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  projectData;
  taskData;
  goalData;
  lineChartData;
  barChartData;
  barChartOptions;
  lineChartOptions;
  constructor() { }

  ngOnInit(): void {

    var colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];


    this.projectData = {
      labels: ["Completed", "Created" ,"InProgress", "Due"],
      datasets: [{
        backgroundColor: [
          "#2ecc71",
		  "#3475A9",
          "#F2F74E",
          "#E22724"
        ],
        data: [12, 19, 5,2]
      }]
    }
	
	this.taskData = {
      labels: ["Completed", "Created" ,"InProgress", "Due"],
      datasets: [{
        backgroundColor: [
          "#2ecc71",
		  "#3475A9",
          "#F2F74E",
          "#E22724"
        ],
        data: [4, 8, 2,2]
      }]
    }
	
	this.goalData = {
      labels: ["Completed", "Created" ,"InProgress", "Due"],
      datasets: [{
        backgroundColor: [
          "#2ecc71",
		  "#3475A9",
          "#F2F74E",
          "#E22724"
        ],
        data: [7, 12, 4,1]
      }]
    }

    /* this.lineChartData = {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [{
        data: [589, 445, 483, 503, 689, 692, 634],
        backgroundColor: 'transparent',
        borderColor: colors[0],
        borderWidth: 4,
        pointBackgroundColor: colors[0]
      },
      {
        data: [639, 465, 493, 478, 589, 632, 674],
        backgroundColor: colors[3],
        borderColor: colors[1],
        borderWidth: 4,
        pointBackgroundColor: colors[1]
      }]
    };
 */

    this.barChartOptions = {
      scales: {
        xAxes: [{
          barPercentage: 0.4,
          categoryPercentage: 0.5
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: false
      }
    }

    this.lineChartOptions = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }

    this.barChartData = {
      labels: ["Bad", "Ok", "Good", "Very Good", "Excellent"],
      datasets: [{
        data: [1, 2, 4, 5, 3],
        backgroundColor: colors[0]
      },
      /* {
        data: [209, 245, 383, 403, 589, 692, 580],
        backgroundColor: colors[1]
      },
      {
        data: [489, 135, 483, 290, 189, 603, 600],
        backgroundColor: colors[2]
      },
      {
        data: [639, 465, 493, 478, 589, 632, 674],
        backgroundColor: colors[4]
      } */
	  ]
    };
  }
}
