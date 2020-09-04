import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DashboardService } from './dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  RawData;
  projectData;
  taskData;
  goalData;
  feedbackData;
  feedbackOptions;
  lineChartOptions;
  colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];

  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {

    this.feedbackOptions = {
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

    this.dashboardService.getDashboard().subscribe((res)=>{
      if(res.errorCode==0)
      {
        this.RawData=res.dataObj;
        this.UpdateCharts();
      }
    });



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



    // this.lineChartOptions = {
    //   scales: {
    //     yAxes: [{
    //       ticks: {
    //         beginAtZero: false
    //       }
    //     }]
    //   },
    //   legend: {
    //     display: false
    //   }
    // }


  }


  UpdateCharts=function()
  {
    this.projectData = {
      labels: ["Completed", "Created" ,"InProgress", "Due"],
      datasets: [{
        backgroundColor: [
          "#2ecc71",
		      "#3475A9",
          "#F2F74E",
          "#E22724"
        ],
        data: [this.RawData.completedProject, this.RawData.createdProject, this.RawData.inprogressProject,this.RawData.dueProjet]
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
        data: [this.RawData.completedTask, this.RawData.createdTask, this.RawData.inprogressTask,this.RawData.dueTask]
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
        data: [this.RawData.completedGoal, this.RawData.createdGoal, this.RawData.inprogressGoal,this.RawData.dueGoal]
      }]
    }

    this.feedbackData = {
      labels: ["Bad", "Ok", "Good", "Very Good", "Excellent"],
      datasets: [{
        data: [this.RawData.feedbackBad, this.RawData.feedbackOk, this.RawData.feedbackGood, this.RawData.feedbackVeryGood, this.RawData.feedbackExcellent],
        backgroundColor: this.colors[0]
      },
	  ]
    };
  }
}
