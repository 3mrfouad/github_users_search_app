export default function Card({ user }) {
  return (
    <div className={'cardContainer'}>
      <img
        src={user.avatar_url}
        alt={`${user.login} profile`}
        className={'avatar'}
      />
      <a
        className={'cardUri'}
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
      >
        <span>{user.login}</span>
        <span className={'material-symbols-outlined'}>open_in_new</span>
      </a>
    </div>
  )
}
