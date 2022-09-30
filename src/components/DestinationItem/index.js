import './index.css'

const Items = props => {
  const {destinationsItems} = props
  const {imgUrl, name, id} = destinationsItems

  return (
    <li className="card">
      <img src={imgUrl} alt={name} className="img" />
      <p>{name}</p>
    </li>
  )
}

export default Items
