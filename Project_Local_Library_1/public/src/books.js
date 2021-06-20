function findAuthorById(authors, id) {  
  let creator;
   const authorLocator = authors.find((author) => author.id === id ? creator = author : creator)
return authorLocator 
}

function findBookById(books, id) {
  let resource;
  const bookLocator = books.find((book) => book.id === id ? resource = book : resource)
  return bookLocator;
}

function partitionBooksByBorrowedStatus(books) {
  let returnedBooks = books.filter((book) => book.borrows[0].returned === true);
  let checkedBooks = books.filter((book) => book.borrows[0].returned === false);
  return [checkedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  let borrowers = book.borrows.map((borrow) => { 
    let accountInfo = findAuthorById(accounts, borrow.id)
    accountInfo.returned = borrow.returned
  return accountInfo
  }).slice(0, 10)
return borrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
