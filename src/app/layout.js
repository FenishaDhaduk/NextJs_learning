import { Inter } from 'next/font/google'
import { ToastContainer} from 'react-toastify';
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import CustomNavbar from '@/components/CustomNavbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToastContainer />
     <CustomNavbar/>
     <div className='mt-2'>
     {children}
     </div>
<Footer/>
      </body>
    </html>
  )
}
