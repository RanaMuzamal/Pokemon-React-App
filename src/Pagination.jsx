import React from 'react'

export default function Pagination({gotoNextPage,gotoPrevPage}) {
  return (
    <div>
      {gotoNextPage && < button onClick={gotoNextPage}>Next</button>}
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous Page</button>  }
    </div>
  )
}
