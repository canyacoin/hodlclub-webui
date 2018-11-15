import React from 'react'
import './App.css'
import ListItem from './ListItem'
import ListHeader from './ListHeader'

class Members extends React.Component {
  render() {
    return (
      <div className="Members">
        <ListHeader />
        {this.props.hodlClub.map((hodler, index) => <ListItem hodler={hodler} key={index} />)}

      </div >
    )
  }
}

export default Members
