import StudentLayout from '../layouts/StudentLayout'

function BookDetails() {
  return (
    <StudentLayout>
      <div className='card'>
        <center>
          <img
            src='https://cdn-icons-png.flaticon.com/512/29/29302.png'
            width='150'
          />

          <h1>Java Programming</h1>

          <p>
            Author: James Gosling
          </p>

          <p>
            Category: Programming
          </p>

          <p>
            Available Quantity: 10
          </p>

          <button>
            Add To Wishlist
          </button>
        </center>
      </div>
    </StudentLayout>
  )
}

export default BookDetails