import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  inputs:['user']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
