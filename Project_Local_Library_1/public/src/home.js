function getTotalBooksCount(books) {
  let total = 0;
  return total = books.length;
}

function getTotalAccountsCount(accounts) {
  let total = 0;
  return total = accounts.length;
}

function getBooksBorrowedCount(books) {
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false) {
      total += 1;
    }
  } return total;
}

function topFive(books) {
   let result = books.sort((countA, countB) => (countA.count < countB.count ? 1 : -1)).slice(0, 5);
return result; 
}


function getMostCommonGenres(books) { 
  const commonGenres = [];
  for (let book of books) {
  const genre = commonGenres.find(
(currentGenre) => currentGenre.name === book.genre );
if (genre) { genre.count++; }

else { commonGenres.push({ name: book.genre, count: 1 }); } }
return topFive(commonGenres); }



function getMostPopularBooks(books) {
  const popularBooks = books.map(book => {return { name: book.title, count: book.borrows.length }});
  return topFive(popularBooks);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach(author => {
    let returnAuthor = {
     name: `${author.name.first} ${author.name.last}`,
      count: 0
    }
    books.forEach(book => {
      if (book.authorId === author.id) {
        returnAuthor.count += book.borrows.length
      }
    })
    result.push(returnAuthor)
  })
  let sorted = result.sort((less, more) => more.count - less.count);
  return topFive(sorted);
  }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
