import React from "react";
import "../styles/pagination.css";

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange } = props;
  const pagesCount = itemsCount / pageSize;

  console.log(pagesCount);

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" onClick={onPageChange}>
            NEXT
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
