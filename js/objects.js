(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
                    // my code for the TODO
    // const person = {
    //     firstName: 'Damian',
    //     lastName: 'Solis',
    // }
    //
    // console.log(person);

    //practice here and below in this section

    //-----------------------Walkthrough code-------------------

    // const person = {
    //         firstName: 'Damian',
    //         lastName: 'Solis'
    //     }
    //
    // console.log(person);
    // console.log(person.firstName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
                // my code for the TODO ------------------------------------
    // const person = {
    //     firstName: 'Damian',
    //     lastName: 'Solis',
    //
    //     sayhello() {
    //         return `Hello from ${this.firstName} ${this.lastName}!`;
    //     }
    // }
    // console.log(person);
    // console.log(person.sayhello());

                    // ------------------------ Walkthrough Code-----------------
    //using the Object listed in the 1st TODO
    // person.sayHello = function () {
    //     // this. = using the direct parent of the object listed
    //     return `Hello from ${this.firstName} ${this.lastName}!`;
    // }
    //         // checking it works.
    // console.log(person.sayHello());




    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

            // walkthrough code-----------
    // conditionals is using an if/else or other if method/statement
        // ryan and george are the eligible ones for the 0.12 discount.

        // shopper array
    // let shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
                // Arrow function for our FOR EACH ----maybe don't use the ternery here
    // shoppers.forEach((shopper) => {
    //     console.log(`${shopper.name} spend ${shopper.amount}. Your total after the discount is: $${shopper.amount > 200 ? "You got the discount! Your total is: " shopper.amount * 0.88 : "You didn't get the discount :(, your total is: " shopper.amount} `)
    // })

    // let name = shopper.name;
    // let amount = shopper.amount;
    // let discount = shopper.amount
    // if(shopper.amount > 200) {
    //     console.log(`${shopper.name} spent ${shopper.amount.toFixed(2)}. You did not get the discount :( Your new total is: $${shopper.amount * 0.88).toFixed(2)}`);
    //
    // } else {
    //     console.log(`${shopper.name} spent ${shopper.amount.toFixed(2)}. You did get the discount :( Your new total is: $${shopper.amount * 0.88).toFixed(2)}`);
    //
    // }

//------------------^^^^^^^^^^^^^^^^^^^^^^^^^^^^ GO OVER THIS ONE WITH THEO ^^^^^^^^^^^^^^^__________________________________________

    // console.log(shoppers);

//---------------------------------------------------------YOU NEED TO DO THIS and ONWARD________________________

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
        // ----------__GO OVER SYNTAX -----------------
    let books = [
        {title: "The Lightning Thief", author: {firstName: "Rick", lastName: "Riordan"}},
            {title: "The Art of War", author: {firstName: "Sun", lastName: "Tzu"}},
            {title: "Akame Ga Kill", author: {firstName: "Layla", lastName: "Zen"}},
            {title: "Spider-Man", author: {firstName: "Peter", lastName: "Parker"}},
            {title: "Batman", author: {firstName: "Damian", lastName: "Wayne"}}
        ];

    console.log(books[0].author.lastName);
    console.log(books[3].title);







    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */




            // walkthrough code---------------------------  GO OVER IT AGAIN
    books.forEach((book,index) => {
        console.log(`Book #${index + 1} `);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
        if(index < books.length - 1) console.log("---");
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    //-------------------- Walkthrough CODE ------------ Go over this
    function createBook(title, authorFirstName, authorLastName) {
        return {
            title: title,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName}
            }
        }

        let books = [
            createBook( ),
            createBook( ),
            createBook( ),
            createBook( ),
            createBook( ),

        ];

    books.push(createBook("The Little Mermaid"));

    function showBookInfo(book) {
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
    }

    showBookInfo():








})();