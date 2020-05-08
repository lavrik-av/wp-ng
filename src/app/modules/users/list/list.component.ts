import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../core/services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users$: Observable<any[]>;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
  }

}
