import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
// import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'

const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

render(<Root/>, document.getElementById('root'))
