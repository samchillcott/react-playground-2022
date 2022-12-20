import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'

const App = () => {

  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>

      </QueryClientProvider>
    </>
  )
}

export default App