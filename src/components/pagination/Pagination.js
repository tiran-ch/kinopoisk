import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import "./Pagination.css"


export default function Pagination() {

  const handlePageClick = (event) => {
    console.log(event);
  };

  return(
    <div className="Pagination">
      <ReactPaginate
        breakLinkClassName="lll"
        className="pag"
        initialPage={15}
        pageClassName="paginate"
        breakLabel="..."
        nextLabel="next >"
        nextLinkClassName="next"
        previousLinkClassName="previous"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={50}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}