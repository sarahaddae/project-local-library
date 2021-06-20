function findAccountById(accounts, id) {
  const matchingAccount = 
        accounts.find((account) => account.id === id);
  return matchingAccount;
}

function sortAccountsByLastName(accounts) {
  const orderedAccounts = accounts.sort(
    (accountA, accountB) => accountA.name.last < accountB.name.last ? -1 : 1
    )
return orderedAccounts;
  }

function getTotalNumberOfBorrows(account, books) {
let result = 0;
for (let i = 0; i < books.length; i++) {
for (let j = 0; j < books[i].borrows.length; j++) {
if (account.id === books[i].borrows[j].id) {
result++; } } }
return result; }

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter(book => book.borrows.some(borrow => borrow.id === account.id && !borrow.returned)).map( book => {
    return {id: book.id,
           title: book.title,
           authorId: book.authorId,
           author: authors.filter(author => author.id === book.authorId)[0],
           borrows: book.borrows}
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
