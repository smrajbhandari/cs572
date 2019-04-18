import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersdetailsComponent } from './usersdetails/usersdetails.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';
import { CheckUserGuard } from '../check-user.guard';


const routes: Routes = [
  { path: '', component: UsersComponent },
  {
    path: 'detail/:id',
    component: UsersdetailsComponent,
    canActivate: [CheckUserGuard]
  }
];

@NgModule({
  declarations: [UsersComponent, UsersdetailsComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
  providers: [{ provide: DataService, useClass: DataService }],
  exports: [UsersComponent, UsersdetailsComponent],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
