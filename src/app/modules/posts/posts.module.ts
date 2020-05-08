import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../core/shared-modules/material.module';

import { PostsRoutingModule } from './posts-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
