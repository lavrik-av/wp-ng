import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../core/services/posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts$: Observable<any>;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();
  }

}
