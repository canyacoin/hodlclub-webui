import React from 'react'
import './App.css'
import ListItem from './ListItem'
import ListHeader from './ListHeader'
import InfiniteScroll from 'react-infinite-scroller'

class OGMembers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hodlClub: []
    }
  }

  render () {
    return (
      <div className="OGMembers">
        <div className="ListItem flexrow">
          <div className="listItemData">
            <a className="data">Address</a>
          </div>
        </div>
        <InfiniteScroll
          pageStart={0}
          loadMore={async (page) => {
            let result = await this.props.loadMore()
          }}
          hasMore={this.props.moreToLoad}
          loader={<div className="loader" key={0}>Loading ...</div>}
          useWindow={true}
        >
          { this.state.hodlClub.map((hodler, index) => <ListItem hodler={hodler} key={index} />) }
        </InfiniteScroll>
      </div>
    )
  }
}

export default OGMembers
