import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  titleString = 'My Projects';
  myProjects = [
    {
      projectName:"Hate Speech Project",
      createdTime:"2020-01-20 3:15PM",
      trainingStarted:"2020-01-20 3:15PM",
      trainingStatus:1,
      projectType:"Analytics",
      regression:"Prediction"
    },
    {
      projectName:"Hate Speech Project",
      createdTime:"2020-01-20 3:15PM",
      trainingStarted:"2020-01-20 3:15PM",
      trainingStatus:0,
      projectType:"Analytics",
      regression:"Prediction"
    },
    {
      projectName:"Hate Speech Project",
      createdTime:"2020-01-20 3:15PM",
      trainingStarted:"2020-01-20 3:15PM",
      trainingStatus:1,
      projectType:"Analytics",
      regression:"Prediction"
    },
    {
      projectName:"Hate Speech Project",
      createdTime:"2020-01-20 3:15PM",
      trainingStarted:"2020-01-20 3:15PM",
      trainingStatus:0,
      projectType:"Analytics",
      regression:"Prediction"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
