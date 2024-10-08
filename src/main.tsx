import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<Router>
<QueryClientProvider client={queryClient}>
    <App/>
   </QueryClientProvider>
</Router>
  </React.StrictMode>,
)
