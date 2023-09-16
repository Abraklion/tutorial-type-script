// Пример 1
// class Post {
//   id : number
//   title: string
//
//   getBody() : string {
//     return 'Hello'
//   }
// }
//
// let newpost: Post = new Post()
//
// newpost.id = 1
// newpost.title = 'New Post'
//
// console.log(newpost.getBody())
// Пример 2
// class Post {
//   id : number
//   title: string
//
//   constructor(id: number, title: string) {
//     this.id = id
//     this.title = title
//   }
//
//   getBody() : string {
//     return this.id + ' ' + this.title
//   }
// }
//
// let newpost: Post = new Post(1, 'New post')
//
// console.log(newpost.getBody())
// Пример 3
// class Post {
//   public id : number
//   protected title: string
//   private author: string = 'Николай'
//
//   constructor(id: number, title: string, public date: string) {
//     this.id = id
//     this.title = title
//     this.date = date
//   }
//
//   public getBody() : string {
//     return this.id + ' ' + this.title + ' ' + this.date + ' ' + this.author
//   }
//
//   protected getId() : number {
//     return this.id
//   }
//
//   private getAuthor() : string {
//     return this.author
//   }
//
// }
//
//
// let newpost: Post = new Post(1, 'New post', '15.09.2023')
//
// console.dir(newpost)
// console.dir(newpost.getBody())
// Пример 4
// class Post {
//   private _view: string
//
//   constructor(public id: number, protected title: string, public date: string) {
//     this.id = id
//     this.title = title
//     this.date = date
//   }
//
//   public getBody() : string {
//     return this.id + ' ' + this.title + ' ' + this.date
//   }
//
//   public getView() : string {
//     return this._view
//   }
//
//   public setView(param : string) : void {
//     this._view = param
//   }
//
// }
//
// let newpost: Post = new Post(1, 'New post', '15.09.2023')
//
// newpost.setView('Привет')
// console.dir(newpost.getView())
// Пример 5
var Post = /** @class */ (function () {
    function Post(id, title, date) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.id = id;
        this.title = title;
        this.date = date;
    }
    Post.prototype.getBody = function () {
        return this.id + ' ' + this.title + ' ' + this.date;
    };
    Object.defineProperty(Post.prototype, "view", {
        get: function () {
            return this._view;
        },
        set: function (param) {
            this._view = param;
        },
        enumerable: false,
        configurable: true
    });
    return Post;
}());
var newpost = new Post(1, 'New post', '15.09.2023');
newpost.view = 'Привет';
console.dir(newpost.view);
//# sourceMappingURL=lesson6.js.map