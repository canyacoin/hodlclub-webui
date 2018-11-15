import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

class Status extends React.Component {
  constructor (props) {
    super(props)
    this.renderNotApplied = this.renderNotApplied.bind(this)
    this.renderApplied = this.renderApplied.bind(this)
    this.isHodl45 = this.isHodl45.bind(this)
    this.returnMember = this.returnMember.bind(this)
    this.returnDays = this.returnDays.bind(this)
    this.renderDefault = this.renderDefault.bind(this)
    this.state = {
      default: true
    }
  }

  renderDefault () {
    return (
      <p className="searchStatus monospace">
      Search any address in the field above to see it's standing with the HODL Club. <a rel="noopener noreferrer" target="_blank" href='https://blog.canya.com/2018/01/15/canya-hodl-club-update-2/'>Find out about the minimum requirements to join here.</a> </p>
    )
  }

  renderApplied () {
    return (<p className="searchStatus monospace">
      Thanks! You've successfully applied to join. You just need to wait {this.returnDays()} Days until you're in the club.
    </p>)
  }

  renderNotApplied () {
    return (<p className="searchStatus monospace">
      It looks like you've already HODL'd for {this.props.getDaysHodled(this.props.stats)} days, you just need to apply.&nbsp;
      <Link to='/join'>Click here to begin.</Link>
    </p>)
  }

  renderIsOG () {
    return (<p className="searchStatus monospace">
      You're an {'\uD83D\uDC51'} OG Hodler {'\uD83D\uDC51'}
    </p>)
  }

  renderNotFound () {
    return (<p className="searchStatus monospace">
      We couldn't find that address, check back when it has more than 2,500 CAN (if it has just gone over 2,500 check back in a couple of hours).
    </p>)
  }

  returnDays () {
    let daysHodled = this.props.getDaysHodled(this.props.stats)
    let requiredDays = (45 - daysHodled)
    if (requiredDays > 0) {
      return requiredDays
    } else {
      return daysHodled
    }
  }

  returnMember () {
    return (<p className="searchStatus monospace">Approved HODL Club Member.</p>)
  }

  isHodl45 () {
    return this.props.getDaysHodled(this.props.stats) > 45
  }

  isOG () {
    return this.props.stats.isOG
  }

  giveStatus () {
    let stats = this.props.stats
    if (Object.keys(stats).length !== 0) {
      if (this.isOG()) return (this.renderIsOG())
      if (stats.applied) {
        if (this.isHodl45()) {
          return this.returnMember()
        } else {
          return this.renderApplied()
        }
      } else {
        return (this.renderNotApplied())
      }
    } else if (this.props.notFound) {
      return this.renderNotFound()
    } else {
      return this.renderDefault()
    }
  }

  render () {
    return (<div className="Status">
      <div className="flexrow aligncentre">
      </div>
      {this.giveStatus()}
    </div>)
  }
}

export default Status
