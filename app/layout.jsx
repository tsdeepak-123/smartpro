import '@/styles/global.css'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
export const metadata = {
    title: "SmotPro",
  }

const RootLayout = ({children}) => {
  return (
    <html>
        <body>
        <main className=''>
            <Navbar/>
            {children}
            <Footer/>
        </main>
        </body>
    </html>
  )
}

export default RootLayout