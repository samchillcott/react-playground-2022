import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import Dashboard from './pages/Dashboard'

const App = () => {

  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </>
  )
}

export default App