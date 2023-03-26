import './index.css'

const EmojiCont = props => {
  const {obj, func} = props
  const {name, imageUrl} = obj

  const onBtnClick = () => {
    func()
  }
  return (
    <li className="btn">
      <img onClick={onBtnClick} className="emoji" src={imageUrl} alt={name} />
      <p>Sad</p>
    </li>
  )
}

export default EmojiCont
