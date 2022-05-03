export default function SearchForm({
  handleSubmit,
  term,
  setTerm,
  type,
  setType,
  setPage
}) {
  return (
    <form className={'formContainer'}>
      <span className={'formSectionTitle'}>
        <strong>Search</strong>
      </span>
      <label>
        <input
          type={'search'}
          value={term}
          onChange={e => setTerm(e.target.value)}
          className={'termInput'}
          placeholder={'Enter search term to start...'}
        />
      </label>
      <div className={'typeContainer'}>
        <span className={'formSectionTitle'}>
          <strong>Type</strong>
        </span>
        <label>
          <input
            type={'radio'}
            value={'user'}
            name={'type'}
            checked={type === 'user'}
            onChange={() => setType('user')}
          />{' '}
          Users
        </label>
        <label>
          <input
            type={'radio'}
            value={'org'}
            name={'type'}
            checked={type === 'org'}
            onChange={() => setType('org')}
          />{' '}
          Organizations
        </label>
      </div>
      <button
        disabled={!term}
        type={'submit'}
        onClick={e => {
          setPage(1)
          handleSubmit(e)
        }}
        className={'submitBtn'}
      >
        Search
      </button>
    </form>
  )
}
