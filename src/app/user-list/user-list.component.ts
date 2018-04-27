import { Component, OnInit, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  inputs:['users'],
  outputs: ['SelectUser']
})
export class UserListComponent implements OnInit {

  public SelectUser = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSelect(uid: User){
    this.SelectUser.emit(uid);
   }
}
