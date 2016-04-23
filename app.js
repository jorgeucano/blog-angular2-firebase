System.register(["angular2/platform/browser", "angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var HelloWord;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HelloWord = (function () {
                function HelloWord() {
                    this.posts = [
                        {
                            url: "/url1",
                            title: "hola soy un title 1",
                            preview: "Hola soy una preview",
                            by: "@jorgeucano",
                            day: "12/12/2012"
                        },
                        {
                            url: "/url1",
                            title: "hola soy un title 1",
                            preview: "Hola soy una preview",
                            by: "@jorgeucano",
                            day: "12/12/2012"
                        },
                        {
                            url: "/url1",
                            title: "hola soy un title 1",
                            preview: "Hola soy una preview",
                            by: "@jorgeucano",
                            day: "12/12/2012"
                        }
                    ];
                }
                HelloWord = __decorate([
                    core_1.Component({
                        selector: 'list',
                        template: "<div *ngFor=\"#post of posts\" class=\"post-preview\">\n                    <a href=\"{{post.url}}\">\n                        <h2 class=\"post-title\">\n                            {{post.title}}\n                        </h2>\n                        <h3 class=\"post-subtitle\">\n                            {{post.preview}}\n                        </h3>\n                    </a>\n                    <hr>\n                </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HelloWord);
                return HelloWord;
            })();
            browser_1.bootstrap(HelloWord);
        }
    }
});
//# sourceMappingURL=app.js.map