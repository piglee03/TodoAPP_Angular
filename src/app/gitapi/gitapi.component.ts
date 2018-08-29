import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GitData } from './gitData';
import { GitAPIService } from './git-api.service';

@Component({
  selector: 'app-gitapi',
  templateUrl: './gitapi.component.html',
  styleUrls: ['./gitapi.component.css']
})
export class GitapiComponent {

  obtainedData: GitData;

  constructor(
    private gitAPIService: GitAPIService
  ) { }

  onSubmit(form: NgForm) {
    this.gitAPIService.getData(form.value.text)
      .subscribe( (data: GitData) => this.obtainedData = { ...data });
    form.reset();
  }

}
