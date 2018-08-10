import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '../../../../node_modules/@angular/router';


@Component({
    selector: 'app-post-add',
    templateUrl: './post_add.component.html'
})

export class PostAddComponent implements OnInit {
    public postAddForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private postService: PostService,
        private router: Router ) {

       }

    ngOnInit() {
        this.form();
    }
    public form() {
        this.postAddForm = this.formBuilder.group({
            title: ['',
                [Validators.required,
                Validators.maxLength(10)]],
            categories: ['',
                [Validators.required,
                Validators.minLength(5),
                Validators.maxLength(200)] ] ,
            content: ['',
                [Validators.required]]
        });
    }

    public onSubmit() {

        const {valid, value} = this.postAddForm;

        if (valid) {

            this.postService.addPost(value)
            .subscribe(data => this.router.navigate(['/posts/list']));
        }
    }
}
