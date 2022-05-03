/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import { useEffect, useState } from 'react'
import { PER_PAGE_SIZE } from '../helpers/constants'
export default function PaginationForm({
  results,
  perPage,
  setPerPage,
  page,
  setPage,
  handleSubmit
}) {
  const [showPagination, setShowPagination] = useState(false)
  const [pagesTotal, setPagesTotal] = useState(0)

  useEffect(() => {
    setShowPagination(
      results &&
        results?.total_count > Math.min(...Object.values(PER_PAGE_SIZE)) &&
        results?.total_count >= results?.items?.length
    )
    setPagesTotal(Math.ceil(results?.total_count / perPage))
  }, [results, perPage])

  return (
    showPagination && (
      <form className="paginationForm">
        <label className={'perPage'}>
          Results per page{' '}
          <select
            value={perPage}
            onChange={e => {
              setPerPage(e.target.value)
              setPage(1)
              handleSubmit(e)
            }}
          >
            {Object.values(PER_PAGE_SIZE).map(num => {
              return (
                <option key={num} value={num}>
                  {num}
                </option>
              )
            })}
          </select>
        </label>

        <div className={'btnGroup'}>
          <button
            type={'submit'}
            disabled={page === 1}
            onClick={e => {
              setPage(page - 1)
              handleSubmit(e)
            }}
            className={'submitBtn paginationBtn'}
          >
            Previous
          </button>
          <span className={'pageCount'}>
            {page}/{pagesTotal}
          </span>
          <button
            type={'submit'}
            disabled={page >= pagesTotal}
            onClick={e => {
              setPage(page + 1)
              handleSubmit(e)
            }}
            className={'submitBtn paginationBtn'}
          >
            Next
          </button>
        </div>
      </form>
    )
  )
}
