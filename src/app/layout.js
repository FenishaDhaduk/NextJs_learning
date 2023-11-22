import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <h1>This is a Header</h1>
      {children}
      <h1>This is a Footer</h1>
      </body>
    </html>
  )
}
