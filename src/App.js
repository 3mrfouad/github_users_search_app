import { useEffect, useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import ErrorMessage from './components/ErrorMessage'
import Header from './components/Header'
import Footer from './components/Footer'
import { getGitHubSearchUri } from './helpers/getGitHubSearchUri'
import PaginationForm from './components/PaginationForm'
import Instructions from './components/Instructions'
function App() {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [error, setError] = useState('')
  const [perPage, setPerPage] = useState(30)
  const [page, setPage] = useState(1)
  const [term, setTerm] = useState('')
  const [type, setType] = useState('user')

  const handleSubmit = async e => {
    e.preventDefault()

    // warn user if no search term
    if (!term) {
      alert('Please enter search term')
      return
    }

    setResults({})
    setError('')
    setLoading(true)

    // load backend data
    try {
      const response = await fetch(
        getGitHubSearchUri(term, type, page, perPage)
      )
      const result = await response.json()

      // set error feedback message if any
      if (result?.total_count === 0) {
        setError('No search results. Please try a different search term.')
      } else {
        setError('')
        setResults(result)
      }
      /* Edge case error since github api calls has max limit  */
      if (result?.message) {
        setError(result.message)
      }
    } catch (err) {
      setResults()
      setError('Error while getting search results. Please try again shortly!')
      console.error('Fetch Error ', err)
    }
    setLoading(false)
  }
  useEffect(() => {
    // setup events to monitor device online status

    const setOfflineMessage = () => {
      setError('No Internet Connection')
    }
    const setOnMessage = () => {
      setError('')
    }

    window.addEventListener('offline', setOfflineMessage)
    window.addEventListener('online', setOnMessage)

    return () => {
      window.removeEventListener('offline', setOfflineMessage)
      window.removeEventListener('online', setOnMessage)
    }
  }, [])

  return (
    <>
      <Header />
      <main className="app">
        <ErrorMessage message={error} />
        <Loader loading={loading} />
        <Instructions />
        <SearchForm
          handleSubmit={handleSubmit}
          term={term}
          setTerm={setTerm}
          setType={setType}
          setPage={setPage}
          type={type}
        />
        <SearchResults results={results} perPage={perPage} type={type} />
        <PaginationForm
          handleSubmit={handleSubmit}
          setPerPage={setPerPage}
          setPage={setPage}
          results={results}
          perPage={perPage}
          page={page}
        />
      </main>
      <Footer />
    </>
  )
}

export default App
