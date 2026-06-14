function Pagination({
  currentPage,
  totalPages,
  setCurrentPage
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        marginTop: '20px'
      }}
    >
      <button
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <span>
        {currentPage} / {totalPages}
      </span>

      <button
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination