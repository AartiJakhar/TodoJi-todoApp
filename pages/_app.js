import Navbar from '../components/Navbar'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainStates from '../context/mainStates';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar'
export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()
  const router=useRouter()
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    router.events.on('routeChangeStart', (()=>{
        setProgress(30)
     }))
     router.events.on('routeChangeComplete', (()=>{
        setProgress(100)
     }))
   
  }, [router.query]);
  return <>
       <QueryClientProvider client={queryClient}>
       <MainStates>
       <LoadingBar
        color='#f11946'
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
  <Navbar/>
   <Component {...pageProps} />
   <Footer/>
   </MainStates>
   </QueryClientProvider>
   </>
}
