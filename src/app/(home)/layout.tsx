import '../globals.css'
import Footer from '@/components/Footer'
import HomeNavbar from '@/components/home/HomeNavbar'

export const metadata = {
  title: 'ARUTUR',
  description: 'Descubra o que Araranguá tem a oferecer'
}

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HomeNavbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
