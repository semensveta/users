import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {UsersDataService} from './services/users.service';
import { HttpClientModule} from '@angular/common/http';
import {CacheService} from './services/cashe.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

const appRoutes: Routes = [
  { path: 'user/:id',
    component: UserDetailsComponent },
  {
    path: 'users',
    component: UserListComponent,
    data: { title: 'Users List' },
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    UsersDataService,
    CacheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
