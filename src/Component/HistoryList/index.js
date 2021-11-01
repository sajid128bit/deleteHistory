import './index.css'

const HistoryList = props => {
  const {listItem, deleteFromList} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = listItem
  const deleteFun = () => {
    deleteFromList(id)
  }
  return (
    <li className="eachItem">
      <p className="time">{timeAccessed}</p>
      <div className="logodomianContainer">
        <img src={logoUrl} alt="domain logo" className="logoImage" />
        <p className="url">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="button"
        testid="delete"
        onClick={deleteFun}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}
export default HistoryList
