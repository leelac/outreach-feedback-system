import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  details: string;
  rating: string;
  showAdditionalQuestion: boolean;
  likeActivity: string;
  improvedActivity: string;
  feedback: any = {};

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.details = params.get("details");
      this.rating = params.get("rating");

      if(this.rating != null && parseInt(this.rating) < 3){
        this.showAdditionalQuestion = true;
      }
    });
  }

  onSubmit() {
    console.log(this.feedback.likeActivity);
    console.log(this.feedback.improvedActivity);

    let feedbackDetails = {
      "details":  this.details,
      "rating":  this.rating,
      "likeActivity":  this.feedback.likeActivity,
      "improvedActivity":  this.feedback.improvedActivity
    };

    this.httpClient.post("http://localhost:9050/feedback", feedbackDetails, this.getArgHeaders())
    .subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      this.router.navigateByUrl('/feedback-success');
    },
    error  => {
      console.log("Error", error);
    }
    );
  }

  private getArgHeaders(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return httpOptions;
}
}
