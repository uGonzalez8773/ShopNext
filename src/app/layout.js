import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin-ext'] })

export const metadata = {
  title: 'GuitarLA - Online Guitar Shop',
  description: 'GuitarLA: guitar shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
