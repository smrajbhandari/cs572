import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./usersdetails.component.css']
})
export class UsersdetailsComponent implements OnInit,OnDestroy {

  private userId;
  private userData;
  private paramSubcription;

  constructor(private route: ActivatedRoute, private users: DataService) {
    this.paramSubcription = route.params.subscribe(params => {
      this.userId = params["id"];
    });
  }

  ngOnInit() {
    this.userData = this.users
      .getCachedData()
      .find(user => user.login.uuid == this.userId);
  }

  ngOnDestroy(): void {
    this.paramSubcription.unsubscribe();
  }

}
