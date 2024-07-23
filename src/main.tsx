import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PokemonProvider } from './context/PokemonContext.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonProvider>
          <App />
      </PokemonProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
