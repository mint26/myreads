# MyReads

This is the final project for Udacity's React Fundamentals Course. The goal of this application is to create a bookshelf app that allows you to select and categorize books you have read, are currently reading or want to read. 

## Getting Started

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

### Prerequisites

* Make sure you have installed NodeJS. 

### Project Structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── components/ # This is where the react components required for this app are placed in. 
        ├── Book.js # The component used to render individual book on the shelf and the search result
        ├── Bookshelf.js # The component which is used to contain rows of books in accordance to its category.
        ├── Row.js # The component used to group book of same category together. 
        ├── Search.js # The component for the search input and display the search result. 
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └

```

## User Stories

[*] In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are: </br>
- Currently Reading
- Want to Read
- Read

[*] Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

[*] The main page also has a link to /search, a search page that allows you to find books to add to your library.

[*] The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

[*] When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

[*] The search page also has a link to / (the root URL), which leads back to the main page.

[*] When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

## Video Walkthrough

![ezgif com-resize 2](https://user-images.githubusercontent.com/25121123/39466034-3cb72254-4d59-11e8-867d-22f648f91284.gif)

## Backend Server

A backend server given by Udacity to support the application. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`get`](#get)
* [`update`](#update)
* [`search`](#search)


### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Tan Hui Min** - *Final Udacity React Project* - [MyReads](https://github.com/mint26/myreads)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


