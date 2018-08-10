import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html'
})
export class PostDetailComponent {

    public post = {};
    constructor(
        private postService: PostService,
        private route: ActivatedRoute
    ) {
        this.getPost();
    }

    getPost() {

        this.route.params.subscribe( data => {
            console.log(data);
            this.postService.byIdPost(data.id)
            .subscribe(post => {
                console.log(post);
                this.post = post;
            });
        })
        
    }
}
