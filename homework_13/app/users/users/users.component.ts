import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private userArray;
  constructor(private users: DataService) {
    this.userArray = this.users.getCachedData();
  }

  ngOnInit() {
  }

}
