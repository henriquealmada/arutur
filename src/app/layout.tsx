import './globals.css'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin']
})

export const metadata = {
  title: 'ARUTUR',
  description: 'Descubra o que Araranguá tem a oferecer'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={openSans.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
