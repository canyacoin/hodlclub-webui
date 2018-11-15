import React from 'react'
import './App.css'
import Blockies from 'react-blockies'
import threewords from 'threewords-happy'
import NumberFormat from 'react-number-format'

class ListItem extends React.Component {
  getEtherscanUrl(address) {
    return `https://etherscan.io/address/${address}`
  }

  render() {
    const hodler = this.props.hodler
    const threeWordsName = threewords(hodler.hash)
    const newchar = ' '
    const formattedThreeWordsName = threeWordsName.split('-').join(newchar)

    return (<div className="ListItem">
      <div className="listItemStack">
        <div className="blockies flexcol">
          {
            hodler.isOG
              ? <a className="isOG">{'\uD83D\uDC51'}</a>
              : ''
          }
          <Blockies seed={hodler.hash} />
        </div>
        <div className="listItemBox listItemAddress flexcol">
          <span className="threewords">{formattedThreeWordsName}</span>
          <a className="walletId" href={this.getEtherscanUrl(hodler.hash)} target="_blank">{hodler.hash}</a>
        </div>
      </div>
      <div className="listItemRow">

        <div className="listItemBox listItemBalance">
          <NumberFormat value={hodler.balance} displayType={'text'} thousandSeparator={true} />&nbsp;
          CAN
        </div>
      </div>
    </div>)
  }
}

export default ListItem
