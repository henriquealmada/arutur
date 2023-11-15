import Navbar from '@/components/Navbar'
import '../globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Hospedagem',
  description: 'Conheça as opções de hospedagem que Araranguá tem a oferecer'
}

export default function AccomodationLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar bgColor={'#2563EB'} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
