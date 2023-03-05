import Navbar from '../components/Navbar'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainStates from '../context/mainStates';
export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return <>
       <QueryClientProvider client={queryClient}>
       <MainStates>
  <Navbar/>
   <Component {...pageProps} />
   <Footer/>
   </MainStates>
   </QueryClientProvider>
   </>
}
