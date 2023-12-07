import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
  
  complaint: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/api/complaints/view")
      .subscribe((data) => {
        this.complaint = data;
      });
  }
}
