import {Component} from 'react'
import HistoryList from '../HistoryList/index'
import './index.css'

class History extends Component {
  constructor(props) {
    super(props)
    const {initialHistoryList} = this.props
    this.state = {searchEle: '', initialHistoryList1: initialHistoryList}
  }

  changeSearchInput = event => {
    this.setState({searchEle: event.target.value})
  }

  deleteFromList = id => {
    const {initialHistoryList1} = this.state
    const updatedList1 = initialHistoryList1.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({initialHistoryList1: updatedList1})
  }

  render() {
    const {searchEle, initialHistoryList1} = this.state
    const updatedList = initialHistoryList1.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchEle.toLowerCase()),
    )
    const val1 = (
      <div className="container3Dual">
        <p className="nohistory">There is no history to show</p>
      </div>
    )
    const val2 = (
      <div className="container3">
        <ul className="unorderList">
          {updatedList.map(eachItem => (
            <HistoryList
              listItem={eachItem}
              key={eachItem.id}
              deleteFromList={this.deleteFromList}
            />
          ))}
        </ul>
      </div>
    )
    return (
      <div className="container1">
        <div className="container2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history"
          />
          <div className="searchInput">
            <div className="searchImageBackground">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search"
              />
            </div>
            <input
              type="search"
              placeholder="Search history"
              className="input"
              onChange={this.changeSearchInput}
              value={searchEle}
            />
          </div>
        </div>
        {updatedList.length === 0 ? val1 : val2}
      </div>
    )
  }
}

export default History
