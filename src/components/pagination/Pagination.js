import React from 'react';
import classnames from 'classnames';
import { usePagination } from "../../utils/hooks/usePagination";
import { DOTS } from '../../utils/constants/constants';
import './pagination.scss';
import PropTypes from 'prop-types';

const Pagination = ({
  isDark,
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
          "bg-white": isDark
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber, index) => {
         
        if (pageNumber === DOTS) {
          return <li key={pageNumber + index} className="pagination-item dots">&#8230;</li>;
        }
		
        return (
          <li
            key={pageNumber}
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage,
              "text-white": isDark
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
          "bg-white hover:bg-white": isDark
        })}
        onClick={onNext}
      >
        <div className={classnames("arrow right", {
        })} />
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  isDark: PropTypes.bool,
  onPageChange: PropTypes.func,
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  className: PropTypes.string
}

export default Pagination;
