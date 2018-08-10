import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
    selector: 'app-post-list',
    templateUrl: './post_list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
    ngOnInit(): void {
        this.getPosts();
    }

    // tslint:disable-next-line:member-ordering
    public posts: Array<any> = [];

    constructor(private postService: PostService,
                private router: Router) {

    }

    public getPosts() {
        this.postService.getPosts().
            subscribe(data => this.posts = data);
    }

    public deletePost(id: number) {
        // console.log('id post', id);
         this.postService.removePost(id).
             subscribe(data => this.getPosts()
                );
    }

    public redirectPageDetail(id: number) {

        this.router.navigate([`/posts/detail/${id}`]);
        //this.router.navigate
        //this.postService.byIdPost(id).
            //subscribe(data => this.router.navigate(['/posts/detail/id']));
    }

}
