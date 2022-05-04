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
  const [submitEvent, setSubmitEvent] = useState()
  const [pagesTotal, setPagesTotal] = useState(0)

  useEffect(() => {
    setShowPagination(
      results &&
        results?.total_count > Math.min(...Object.values(PER_PAGE_SIZE)) &&
        results?.total_count >= results?.items?.length
    )
    setPagesTotal(Math.ceil(results?.total_count / perPage))
  }, [results, perPage])

  useEffect(() => {
    results && handleSubmit(submitEvent)
  }, [page, perPage])

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
              setSubmitEvent(e)
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
              setPage(1)
              setSubmitEvent(e)
            }}
            className={'paginationBtn'}
            aria-label={'first page'}
          >
            <span className="material-symbols-outlined">first_page</span>
          </button>
          <button
            type={'submit'}
            disabled={page === 1}
            onClick={e => {
              setPage(page - 1 > 1 ? page - 1 : 1)
              setSubmitEvent(e)
            }}
            className={'paginationBtn'}
            aria-label={'previous page'}
          >
            <span className="material-symbols-outlined">
              arrow_back_ios_new
            </span>{' '}
          </button>
          <span className={'pageCount'}>
            {page}/{pagesTotal}
          </span>
          <button
            type={'submit'}
            disabled={page >= pagesTotal}
            onClick={e => {
              setPage(page + 1 < pagesTotal ? page + 1 : pagesTotal)
              setSubmitEvent(e)
            }}
            className={'paginationBtn'}
            aria-label={'next page'}
          >
            <span className="material-symbols-outlined">arrow_forward_ios</span>{' '}
          </button>
          <button
            type={'submit'}
            disabled={page >= pagesTotal}
            onClick={e => {
              setPage(pagesTotal)
              setSubmitEvent(e)
            }}
            className={'paginationBtn'}
            aria-label={'last page'}
          >
            <span className="material-symbols-outlined">last_page</span>
          </button>
        </div>
      </form>
    )
  )
}
