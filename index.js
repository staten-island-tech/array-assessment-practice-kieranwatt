const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];


//Array of authors and the book they wrote
//"--- wrote --- in ---"
books.forEach(books => {
console.log(books.authorFirst , books.authorLast,"wrote",books.name,"in",books.publishDate)});
//Sort books from oldest to most recent
const orderedage = books.sort(function(book1,book2){
  return book1.publishDate - book2.publishDate;
});
console.log(orderedage)
//sort books alphabetically
titles.sort();
console.log(titles);
//Find who wrote War and Peace
const author = books.find(({ name }) => name === "War and Peace");
console.log(author);
//how many books were written before 1900?
const oldbooks = books.filter((books) => books.publishDate < 1900);
console.log(oldbooks);
//was there at least one book published within the last 100 years?
const currentyear= 2023
const bookPublish = books.some((book) => book.publishDate >= currentyear-100)
if (bookPublish) {
  console.log("Yes")
}
else {
  console.log("no")
}
//was every book published within the last 100 years?
const bookPublishAll = books.every((book) => book.publishDate >= currentyear-100)
if (bookPublishAll) {
  console.log("Yes")
}
else {
  console.log("no")
}
//print a list of books that "includes" the genre historical
const history = books.filter((type) => type.genre.includes ("historical"));
console.log(history);