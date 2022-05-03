import githubLogo from '../assets/github.png'
export default function Header() {
  return (
    <header className={'header'}>
      <img src={githubLogo} role={'presentation'} alt={''} className={'logo'} />
      <p>Github Search App</p>
    </header>
  )
}
