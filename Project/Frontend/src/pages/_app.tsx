import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from "react-query-devtools"

import Footer from '@Components/Footer'
import Navbar from '@Components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient()

  return <QueryClientProvider client={queryClient} >
    <ReactQueryDevtools />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </QueryClientProvider>


}

export default MyApp
