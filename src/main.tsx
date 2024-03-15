import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import App from './App.tsx'
import theme from './styles/theme.ts'

import './index.css'
import ResetStyles from './styles/resets.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
