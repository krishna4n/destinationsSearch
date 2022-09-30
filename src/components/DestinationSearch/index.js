import {Component} from 'react'
import './index.css'
import DestinationsItem from '../DestinationItem'

class Search extends Component {
  state = {searchInput: ''}

  changeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    let searchedList = destinationsList
    const {searchInput} = this.state

    searchedList = destinationsList.filter(eachUser => {
      const user = eachUser.name.toLowerCase()
      return user.includes(searchInput.toLowerCase())
    })
    return (
      <div className="container">
        <h1 className="">Destination Search</h1>
        <div className="search">
          <input
            type="search"
            className="search"
            value={searchInput}
            onChange={this.changeSearchInput}
          />

          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="icon"
          />
        </div>
        <ul className="cards-container">
          {searchedList.map(eachUser => (
            <DestinationsItem destinationsItems={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Search
