export default function ErrorMessage({ message }) {
  return (
    message && (
      <div className={'errorMsgContainer'}>
        <span className={'material-symbols-outlined'}>error</span>
        <span>{message}</span>
      </div>
    )
  )
}
