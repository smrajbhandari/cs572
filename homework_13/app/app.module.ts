import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';
import { ShowerrorComponent } from './showerror/showerror.component';
const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "users", loadChildren: './users/users.module#UsersModule' },
  { path: "error", component: ShowerrorComponent },
  { path: "**", component: ShowerrorComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ShowerrorComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
