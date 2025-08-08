// src/components/Bookshelf/Bookshelf.jsx
import { useState } from 'react';

const Bookshelf = () => {
  // State to hold list of books
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  // State to hold form inputs
  const [newBook, setNewBook] = useState({
    title: '',
    author: ''
  });

  // Handle input changes (title or author)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ignore empty fields
    if (!newBook.title.trim() || !newBook.author.trim()) return;

    setBooks([
      ...books,
      { title: newBook.title.trim(), author: newBook.author.trim() }
    ]);

    // Reset form
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
