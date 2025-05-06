import './globals.css'
import vazirFont from './contants/localFont'
import { WordProvider } from '@/context/WordContext'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'Word Translations',
  description: 'Word translations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${vazirFont.variable}`}>
        <WordProvider>
          <div className="bg-pink-50 max-w-md h-screen mx-auto p-5">
            {children}
            <Toaster />
          </div>
        </WordProvider>
      </body>
    </html>
  )
}
