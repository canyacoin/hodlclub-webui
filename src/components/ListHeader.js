import React from 'react'
import './App.css'

class ListHeader extends React.Component {
  render() {
    return (
      <div className="ListItem flexrow">
        <div className="listHeader-Wallet flexcol">
          <b>Wallet Address</b>
        </div>
        <div className="listItemRow">
          <span className="listItemBalance"><b>Token Balance</b></span>
        </div>
      </div>)
  }
}

export default ListHeader
