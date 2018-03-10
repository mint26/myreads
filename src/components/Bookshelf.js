import React from 'react'; 

const Bookshelf = (props) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {props.children}
            </div>
            <div className="open-search">
            <a onClick={props.addHandler}>Add a book</a>
            </div>
        </div>
    )
}

export default Bookshelf; 