import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
  const { totalMovies, pageSize, onPageChange, currentPage } = props;

  const pageCount = Math.ceil(totalMovies / pageSize);
  if (pageCount === 1) return null;
  const page = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className='pagination text-white'>
        {page.map((numb) => (
          <li key={numb} className='page-item'>
            <a
              className={numb === currentPage ? 'page-link bg-info' : 'page-link bg-dark'}
              onClick={() => onPageChange(numb)}>
              {numb}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
