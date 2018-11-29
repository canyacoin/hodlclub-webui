import React from 'react'
import './App.css'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import getApiURL from '../config/api'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.getHodlClubMembers = this.getHodlClubMembers.bind(this)
      this.getHodlOGMembers = this.getHodlOGMembers.bind(this)
      this.getHodlTotal = this.getHodlTotal.bind(this)
      this.state = {
        showMe: true,
        hodlClub: [],
        hodlOG: [],
        hodlTotal: 0
      }
      this.apiBasePath = getApiURL()
    }
    componentDidMount() {
      this.getHodlClubMembers()
      this.getHodlOGMembers()
      this.getHodlTotal()
    }

    /**
     *  Fetches the hodl club from the API
     */
    async getHodlClubMembers(sort) {
      if (this.state.loading) return
      const url = `${this.apiBasePath}/hodlers`
      fetch(url)
        .then(response => response.json())
        .catch(this.setState({
          hodlClub: [],
          loading: false
        }))
        .then(data => this.setState({
          hodlClub: data,
          loading: false
        }))
    }

    async getHodlOGMembers(sort) {
      if (this.state.loadingOG) return
      const url = `${this.apiBasePath}/hodlers?tier=OG`
      fetch(url)
        .then(response => response.json())
        .catch(this.setState({
          hodlOG: [],
          loading: false
        }))
        .then(data => this.setState({
          hodlOG: data,
          loadingOG: false
        }))
    }

    async getHodlTotal(sort) {
      if (this.state.loadingTotals) return
      const url = `${this.apiBasePath}/hodltotal`
      fetch(url)
        .then(response => response.json())
        .catch(this.setState({
          hodlTotal: 0,
          loading: false
        }))
        .then(data => this.setState({
          hodlTotal: data,
          loadingTotals: false
        }))
    }

    render() {
      return ( < div className = "App" >
        <
        Nav / >
        <
        hr / >
        <
        Main hodlClub = {
          this.state.hodlClub
        }
        hodlOG = {
          this.state.hodlOG
        }
        hodlTotal = {
          this.state.hodlTotal
        }    
        /> <
        Footer / >
        </div>)
      }
    }

    export default App