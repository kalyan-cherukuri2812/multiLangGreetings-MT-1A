import './index.css'

const Button = props => {
  const {details, lanClick, isActive} = props
  const {id, buttonText} = details

  const btnClick = () => {
    lanClick(id)
  }
  return (
    <button
      onClick={btnClick}
      className={isActive ? 'btn-cilicked btn' : 'btn'}
      type="button"
    >
      {buttonText}
    </button>
  )
}

export default Button
