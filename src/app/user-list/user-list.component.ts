import { Component, OnInit } from '@angular/core';
import {TableDataInterface} from '../interfaces/table-data';
import {UsersDataService} from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  isPending = true;
  pageNumber = 0;

  constructor(
    private usersService: UsersDataService
  ) { }

  ngOnInit() {
    this.getUsersData();
  }

  getUsersData() {
    this.usersService.getUsers(this.pageNumber)
      .subscribe((userData: TableDataInterface) => {
        console.log(userData);
        this.isPending = false;
      }, () => this.isPending = false);
  }

}
