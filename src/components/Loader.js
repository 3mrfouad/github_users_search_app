import spinner from '../assets/Interwind.gif'

export default function Loader({ loading }) {
  return (
    loading && (
      <div className={'loader'}>
        <img src={spinner} role={'presentation'} alt={''} />
      </div>
    )
  )
}
