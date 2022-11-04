import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPostRoutingModule } from './add-post-routing.module';
import { AddPostComponent } from './add-post.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddPostComponent
  ],
  imports: [
    CommonModule,
    AddPostRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AddPostModule { }
