import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopState from './ContextApi/shopState.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
      <ShopState>
        <App />
    </ShopState>
  </StrictMode>,
)
