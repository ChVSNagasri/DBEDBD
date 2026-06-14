import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookCard from '../components/BookCard'

function Home() {
  const books = [
    {
      id: 1,
      title: 'Java Programming',
      author: 'James Gosling',
      category: 'Programming',
      quantity: 10
    },
    {
      id: 2,
      title: 'Python Basics',
      author: 'Guido',
      category: 'Programming',
      quantity: 8
    },
    {
      id: 3,
      title: 'React Development',
      author: 'Jordan Walke',
      category: 'Web',
      quantity: 5
    }
  ]

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: '40px'
        }}
      >
        <div
          style={{
            background: '#c4b5fd',
            padding: '50px',
            borderRadius: '20px',
            color: '#4c1d95'
          }}
        >
          <h1>
            Welcome to Library Management
          </h1>

          <p>
            Manage books, students and
            transactions efficiently.
          </p>
        </div>

        <h2
          style={{
            marginTop: '40px',
            color: '#8b5cf6'
          }}
        >
          Featured Books
        </h2>

        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px'
          }}
        >
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home