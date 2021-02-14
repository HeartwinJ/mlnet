import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  titleString = 'My Projects';
  createProjectForm = new FormGroup({
    projectName: new FormControl('', Validators.required),
    projectDesc: new FormControl(''),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        projectName: this.createProjectForm.value.projectName,
        projectDesc: this.createProjectForm.value.projectDesc
      }
    }
    this.router.navigate(['selectObjective'], navigationExtras);
  }

}
