import React from "react";
import "../styles/pagination.css";

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageNext, onPagePrevious, currentPage } =
    props;
  const pagesCount = itemsCount / pageSize;

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {currentPage > 1 && (
          <button
            className="page-link"
            onClick={() => onPagePrevious(currentPage)}
          >
            PREV
          </button>
        )}
        {currentPage < pagesCount && (
          <button className="page-link" onClick={() => onPageNext(currentPage)}>
            NEXT
          </button>
        )}
        {/* {pages.map((page) => (
          <li className="page-item" key={page}>
            <button
              className={
                page === currentPage ? "page-link active-page" : "page-link"
              }
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))} */}
      </ul>
    </nav>
  );
};

export default Pagination;
