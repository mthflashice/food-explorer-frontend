import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import {SignIn} from './pages/SignIn'
import {New} from './pages/New'
import { Dish } from './pages/Dish'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Dish/>
    </ThemeProvider>
  </React.StrictMode>,
)
