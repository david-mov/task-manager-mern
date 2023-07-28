import React from 'react'
import { Pagination } from 'react-bootstrap'
import PropTypes from 'prop-types'

const PaginationBar = ({
  handlePagination,
  page,
  totalPages,
  hasPrevPage,
  hasNextPage,
  prevPage,
  nextPage,
}) => {
  return (
    <Pagination className='m-0'>
      {hasPrevPage && (
        <Pagination.Prev onClick={() => handlePagination({ page: prevPage })} />
      )}

      {page > 3 && (
        <Pagination.Item onClick={() => handlePagination({ page: 1 })}>
          {1}
        </Pagination.Item>
      )}

      {page > 4 && <Pagination.Ellipsis />}

      {page > 2 && (
        <Pagination.Item onClick={() => handlePagination({ page: page - 2 })}>
          {page - 2}
        </Pagination.Item>
      )}

      {hasPrevPage && (
        <Pagination.Item onClick={() => handlePagination({ page: prevPage })}>
          {prevPage}
        </Pagination.Item>
      )}

      <Pagination.Item active>{page}</Pagination.Item>

      {hasNextPage && (
        <Pagination.Item onClick={() => handlePagination({ page: nextPage })}>
          {nextPage}
        </Pagination.Item>
      )}

      {totalPages > page + 1 && (
        <Pagination.Item onClick={() => handlePagination({ page: page + 2 })}>
          {page + 2}
        </Pagination.Item>
      )}

      {totalPages > page + 3 && <Pagination.Ellipsis />}

      {totalPages > page + 2 && (
        <Pagination.Item onClick={() => handlePagination({ page: totalPages })}>
          {totalPages}
        </Pagination.Item>
      )}

      {hasNextPage && (
        <Pagination.Next onClick={() => handlePagination({ page: nextPage })} />
      )}
    </Pagination>
  )
}

PaginationBar.propTypes = {
  handlePagination: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  hasPrevPage: PropTypes.bool.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  prevPage: PropTypes.number,
  nextPage: PropTypes.number,
}

export default PaginationBar
