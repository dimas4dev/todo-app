import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Provider } from "react-redux";

import App from './App.tsx'
import { store } from "./redux/store";
import theme from './styles/theme.ts'

import './index.css'
import ResetStyles from './styles/resets.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ResetStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
