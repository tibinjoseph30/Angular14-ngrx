import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPostRoutingModule } from './edit-post-routing.module';
import { EditPostComponent } from './edit-post.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditPostComponent
  ],
  imports: [
    CommonModule,
    EditPostRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditPostModule { }
