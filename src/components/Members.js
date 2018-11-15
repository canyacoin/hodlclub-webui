import React from 'react'
import './App.css'
import ListItem from './ListItem'
import ListHeader from './ListHeader'

class Members extends React.Component {
  render() {
    const title = this.props.OG ? 'OG Members' : 'Memebers'
    return (
      <div className="Members">
        <h3>{title}</h3>
        <ListHeader />
        {this.props.hodlClub.map((hodler, index) => <ListItem hodler={hodler} key={index} />)}

      </div >
    )
  }
}

export default Members
