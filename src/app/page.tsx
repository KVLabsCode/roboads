import Nav from '@/components/kovio/Nav'
import Hero from '@/components/kovio/Hero'
import SimFocus from '@/components/kovio/SimFocus'
import Environments from '@/components/kovio/Environments'
import WhyKovio from '@/components/kovio/WhyKovio'
import PlatformDiagram from '@/components/kovio/PlatformDiagram'
import ImpactStrip from '@/components/kovio/ImpactStrip'
import CtaSplit from '@/components/kovio/CtaSplit'
import Footer from '@/components/kovio/Footer'

export default function Home() {
  return (
    <main style={{ background: '#F1EDE2', color: '#14130F', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <SimFocus />
      <Environments />
      <WhyKovio />
      <PlatformDiagram />
      <ImpactStrip />
      <CtaSplit />
      <Footer />
    </main>
  )
}
