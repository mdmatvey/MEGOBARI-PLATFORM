import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import MapStore from './processes/store/MapStore'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Context.Provider value={{
      mapStore: new MapStore(),
    }}>
      <App />
    </Context.Provider>
)
