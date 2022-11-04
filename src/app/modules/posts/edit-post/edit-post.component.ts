import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostState } from 'src/app/store/reducers/posts.reducer';
import { Store } from '@ngrx/store';
import { getPostsById } from 'src/app/store/selector/posts.selector';
import { Post } from 'src/app/models/posts.model';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { updatePosts } from 'src/app/store/actions/posts.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy {

  post!: Post;
  postSubscription!: Subscription;
  postForm!: FormGroup;
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private store: Store<PostState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=> {
      const id = params.get('id');
      this.postSubscription = this.store
      .select(getPostsById, {id})
      .subscribe((data)=> {
        this.post = data
        this.postUpdateForm();
      })
    })
  }

  postUpdateForm() {
    this.postForm = this.formBuilder.group({
      title: [this.post.title, [Validators.required]],
      description: [this.post.description, [Validators.required]]
    })
  }

  onUpdate() {
    this.submitted = true
    if(!this.postForm.valid) {
      return;
    }
    console.log(this.postForm.value);

    const post: Post = {
      id: this.post.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    this.store.dispatch(updatePosts({post}));
    alert('Post successfully updated');
    this.router.navigate(['posts']);
  }

  ngOnDestroy() {
    if(this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

}
