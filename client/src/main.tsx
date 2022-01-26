import React from 'react'
import ReactDOM from 'react-dom'
import 'assets/style/index.scss'
import {BrowserRouter} from 'react-router-dom'
import Router from 'infrastructure/router/index'
import Header from 'components/header/header'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
