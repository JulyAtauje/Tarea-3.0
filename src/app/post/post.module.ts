import { NgModule } from '@angular/core';
import { PostAddComponent } from './post_add/post_add.component';
import { SharedModule } from '../shared/shared.module';
import { PostService } from './post.service';
import { PostListComponent } from './post_list/post_list.component';
import { PostDetailComponent } from './post_detail/post-detail.component';

@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [
        PostAddComponent,
        PostListComponent,
        PostDetailComponent
    ],
    exports: [
        PostAddComponent,
        PostListComponent,
        PostDetailComponent
    ],
    providers: [PostService]
})

export class PostModule {

}
