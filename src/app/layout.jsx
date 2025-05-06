import './globals.css'
import vazirFont from './contants/localFont'

export const metadata = {
  title: 'Word Translations',
  description: 'Word translations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${vazirFont.variable}`}>
        <div className="bg-pink-50 max-w-md h-screen mx-auto p-5">
          {children}
        </div>
      </body>
    </html>
  )
}
