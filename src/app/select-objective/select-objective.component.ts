import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-objective',
  templateUrl: './select-objective.component.html',
  styleUrls: ['./select-objective.component.css']
})
export class SelectObjectiveComponent implements OnInit {

  titleString = '';
  selectObjectiveForm = new FormGroup({

  });
  modelObjectives = [
    {
      value: 0,
      title: 'Single Label Classification',
      desc: 'Predict the one correct label that you want assigned to a document.'
    },
    {
      value: 1,
      title: 'Single Label Classification',
      desc: 'Predict the one correct label that you want assigned to a document.'
    },
    {
      value: 2,
      title: 'Single Label Classification',
      desc: 'Predict the one correct label that you want assigned to a document.'
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((val) => {
      console.log(val);
      this.titleString = val.projectName;
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.selectObjectiveForm.value);
  }

}
