function Table({ books }) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Quantity</th>
        </tr>
      </thead>

      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.category}</td>
            <td>{book.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table