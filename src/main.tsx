import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "primereact/resources/themes/lara-light-indigo/theme.css";  // theme
import "primereact/resources/primereact.min.css";                  // core css
import "primeicons/primeicons.css";                                // icons


const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  throw new Error('Root element not found')
}

