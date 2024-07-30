const book = {
  id: 25,
  title: "Java",
  author: "dave",
};

//  traditional way of accessing the prperties/feilds
console.log(book.author);
console.log(book.id);
console.log(book.title);

console.log("-----------using the destructuring------------");

const { title, author } = book;
console.log(title);
console.log(author);
