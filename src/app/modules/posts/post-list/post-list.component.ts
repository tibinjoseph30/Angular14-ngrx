import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { PostState } from 'src/app/store/reducers/posts.reducer';
import { getPosts } from 'src/app/store/selector/posts.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postlist!: Observable<Post[]>
  constructor(private store: Store<PostState>) { }

  ngOnInit(): void {
    this.postlist = this.store.select(getPosts);
  }

}
