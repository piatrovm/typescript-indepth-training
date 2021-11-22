showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// Task 02.01
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.TypeScript));
// const result = getBookAuthorByIndex(0);
// console.log(result);
// console.log(calcTotalPages());

// Task 03.01
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id}-${name}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Boris', 2));

// Task 03.02
// createCustomer('Maryana');
// createCustomer('Maryana', 31);
// createCustomer('Maryana', 31, 'Minsk');
// console.log(getBookTitlesByCategory());
// console.log(getBookTitlesByCategory(undefined));
// console.log(getBookTitlesByCategory(null));
// logFirstAvailable();
// const result = getBookByID(1);
// console.log(result);
// const result = сheckoutBooks('Maryana', 1, 2, 3);
// const result = сheckoutBooks('Maryana', ...[1, 2, 3]);
// console.log(result);

// Task 03.03
// console.log(getTitles('Anna'));
// console.log(getTitles(true));
// console.log(getTitles(1, true));

// Task 03.04
// console.log(bookTitleTransform('Java'));
// console.log(bookTitleTransform(100));

// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//    // year: 2015,
//     //copies: 3
//     pages: 200,
//     markDamaged: (reason: string) => console.log(`Damaged ${reason}`),
// };
//
// console.log(printBook(myBook));
// myBook.markDamaged('missing back over');

// Task 04.02
// const logDamage: Logger = (reason: string) => console.log(`Damaged ${reason}`);
// logDamage('missing back over');

// Task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'ann@gmail.com',
//     numBookPublished: 10,
// };
//
// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@gmail.com',
//     department: 'Reseach',
//     assistCustomer: null,
// };

// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);
// b.	offer.magazine.getTitle()
// c.	offer.book.getTitle()
// d.	offer.book.authors[0]

// Task 04.05
// console.log(getProperty(getAllBooks()[0], 'title'));
// console.log(getProperty(getAllBooks()[0], 'markDamaged'));

// Task 05.01
// const ref: ReferenceItem = new ReferenceItem(1, 'Typescript', 2021);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02, 06.03
// const refBook = new RefBook(1, 'TypeScript', 2021, 3);
// console.log(refBook);
// refBook.printItem();
// const p1 = Object.getPrototypeOf(refBook);
// console.log(p1);
// const p2 = Object.getPrototypeOf(p1);
// console.log(p2);
// printRefBook(refBook);
// const uLibrarian = new UL.UniversityLibrarian();
// printRefBook(uLibrarian);

// Task 05.03
// const refBook = new Encyclopedia(1, 'TypeScript', 2021, 3);
// refBook.printCitation();
// console.log(refBook);

// Task 05.04
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');

// Task 05.05
// const personBook: PersonBook = {
//     name: 'Anna',
//     email: 'anna@gmail.com',
//     id: 2,
//     title: 'title',
//     category: Category.JavaScript,
//     author: 'author',
//     available: true,
// }

// Task 06.05
// const flag = true;
// if (flag) {
//     const modules = await import('./classes');
//     const reader = new modules.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);
//     console.log(reader);
// }
//
// if (flag) {
//     import('./classes')
//         .then(modules => {
//             const reader = new modules.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[0]);
//             console.log(reader);
//         });
// }

// Task 06.06
// import { Library } from './classes/library';
// import { Library } from './classes';
// import type { Library } from './classes/library';
// import { UniversityLibrarian } from './classes/university-ibrarian';
// // const lib: Library = new Library();
// const lib: Library = {
//     id: 1,
//     name: 'Anna',
//     address: 'Kyiv',
// };

// Task 07.01
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
// let result = purge<Book>(inventory);
// console.log(result);
// const result2 = purge([1, 2, 3, 4, 5]);
// console.log(result2);

// Task 07.02
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log('book', bookShelf.getFirst().title);
//
// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
//
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log('magazine', magazineShelf.getFirst().title);

// Task 07.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));
//
// console.log(getProperty<Book, 'id'>(getAllBooks()[0], 'id'));

// Task 07.04
// const BookRequiredFields: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.JavaScript,
//     id: 1,
//     markDamaged: null,
//     pages: 100,
//     title: 'title',
// };
//
// const UpdatedBook: UpdatedBook = {};
// let params: Parameters<СreateCustomerFunctionType>;
// let params: Parameters<typeof createCustomer> = ['Anna', 30];
// createCustomer(...params);

// Task 08.01
// const ul = new UL.UniversityLibrarian();
// console.log(ul);
// UL.UniversityLibrarian['a'] = 'A';
// ul.assistCustomer = null;
// ul.assistCustomer = function() {};
// const pr = Object.getPrototypeOf(ul);
// console.log(pr);
// pr.assistCustomer = null;
// pr.assistCustomer = function() {};

// Task 08.02
// const ul = new UL.UniversityLibrarian();
// ul.name = 'Anna';
// ul['printLibrarian']();
// console.log(ul);

// Task 08.03
// const ul = new UL.UniversityLibrarian();
// ul.assistFaculty = null;
// ul.teachCommunity = null;

// Task 08.04
// const enc = new RefBook(1, 'Css', 2021, 3);
// enc.printItem();

// Task 08.05
// const ul = new UL.UniversityLibrarian();
// ul.name = 'Anna';
// ul.assistCustomer('Boris');
// console.log(ul);

// Task 08.06
// const ul = new UL.UniversityLibrarian();
// ul.name = 'Anna';
// console.log(ul.name);
// ul.assistCustomer('Boris');
// console.log(ul);

// Task 08.07
// const enc = new RefBook(1, 'Css', 2021, 3);
// enc.copies = 10;
// console.log(enc);

// Task 09.01
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(len => {
//         console.log(len);
//         return Promise.resolve(len);
//     })
//     .then(len => console.log(len))
//     .catch(err => console.log(err));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(err => console.log(err));
// console.log('End');
