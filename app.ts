import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
import { NgFor } from "angular2/common";

@Component({
	selector: 'list',
	template:`<div *ngFor="#post of posts" class="post-preview">
                    <a href="{{post.url}}">
                        <h2 class="post-title">
                            {{post.title}}
                        </h2>
                        <h3 class="post-subtitle">
                            {{post.preview}}
                        </h3>
                    </a>
                    <hr>
                </div>`
})

class HelloWord{
	names: string[];

	constructor(){
		this.posts = [
			{
				url : "/url1",
				title: "hola soy un title 1",
				preview: "Hola soy una preview",
				by: "@jorgeucano",
				day: "12/12/2012"
			},
			{
				url : "/url2",
				title: "hola soy un title 2",
				preview: "Hola soy una preview 2",
				by: "@jorgeucano",
				day: "12/12/2012"
			},
			{
				url : "/url3",
				title: "hola soy un title 3",
				preview: "Hola soy una preview 3",
				by: "@jorgeucano",
				day: "12/12/2012"
			}
		]
	}
}

bootstrap(HelloWord);