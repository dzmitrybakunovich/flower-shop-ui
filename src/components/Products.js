import Product from "./Product";

import "../components/styles/products.css";


import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';


function PaginatedItems({ itemsPerPage, products }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            activeLinkClassName="pagination-link-active"
            nextLinkClassName="pagination-link"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            pageClassName="pagination-link"
            previousLabel="< previous"
            previousLinkClassName="pagination-link"
            renderOnZeroPageCount={null}
        className="pagination"/>
      </>
  );
}


const Items = ({ currentItems }) => {
  return (
    <div className="products-container">
      {currentItems && currentItems.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default PaginatedItems;
