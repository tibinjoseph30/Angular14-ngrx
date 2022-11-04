import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/posts.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { addPosts } from 'src/app/store/actions/posts.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  addPost() {
    this.submitted = true;
    if (!this.postForm.valid) {
      return
    }
    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    this.store.dispatch(addPosts({post}))
    alert('Post Added Successfully');
    this.router.navigate(['posts']);
  }

}
