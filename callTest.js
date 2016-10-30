/**
 * Created by wangdong on 16/7/27.
 */

function Person(name) {
    this.name = name;
}

function Author(name, books) {
    Person.call(this, name);
    this.books = books;
}

var author = new Author("wd", "java");

//console.log(author.name + " " + author.books);


console.log(author.constructor);
console.log(Author.constructor);
console.log(Author.prototype.constructor);``