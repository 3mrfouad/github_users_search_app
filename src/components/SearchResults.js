import { useEffect, useState } from 'react'
import Card from './Card'
export default function SearchResults({ results, perPage, type }) {
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [usersList, setUsersList] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    setShowSearchResults(results?.items && results?.items?.length !== 0)
    setUsersList(results?.items?.slice(0, perPage) || [])
    setTitle(type === 'org' ? 'Organization: ' : 'Users: ')
  }, [results, perPage, type])

  return (
    showSearchResults && (
      <div className={'resultsContainer'}>
        <h1>
          {title} <span className="count">Count: {results?.items?.length}</span>
        </h1>
        <ul className={'listContainer'}>
          {usersList.map((result, i) => (
            <li className={'listItem'} key={i}>
              <Card user={result} />
            </li>
          ))}
        </ul>{' '}
      </div>
    )
  )
}
