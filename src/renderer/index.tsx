import ReactDom from 'react-dom'
import React from 'react'

import { WindowStoreProvider } from './store'
import { AppRoutes } from './routes'

import './style.css'

ReactDom.render(
  <React.StrictMode>
    <WindowStoreProvider>
      <AppRoutes />
    </WindowStoreProvider>
  </React.StrictMode>,
  document.querySelector('app')
)
