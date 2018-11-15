import React from 'react'
import './App.css'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.getHodlClubMembers = this.getHodlClubMembers.bind(this)
    this.getHodlOGMembers = this.getHodlOGMembers.bind(this)
    this.state = {
      showMe: true,
      hodlClub: [],
      hodlOG: []
    }
  }
  componentDidMount() {
    this.getHodlClubMembers()
    this.getHodlOGMembers()
  }

  /**
   *  Fetches the hodl club from the API
   */
  async getHodlClubMembers(sort) {
    if (this.state.loading) return
    fetch('http://localhost:8080/hodlers')
      .then(response => response.json())
      .then(data => this.setState({ hodlClub: data, loading: false }))
  }

  async getHodlOGMembers(sort) {
    if (this.state.loadingOG) return
    fetch('http://localhost:8080/hodlers?tier=OG')
      .then(response => response.json())
      .then(data => this.setState({ hodlOG: data, loadingOG: false }))
  }

  render() {
    return (<div className="App">
      <Nav />
      <hr />
      <Main
        hodlClub={this.state.hodlClub}
        hodlOG={this.state.hodlOG}
      />
      <Footer />
    </div>)
  }
}

export default App
