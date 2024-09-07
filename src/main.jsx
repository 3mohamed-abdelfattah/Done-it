import { createRoot } from 'react-dom/client'
import App from '@/App.jsx'
import '@/styles/global.css'
import { store } from '@/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)