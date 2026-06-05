import Nav from '@/components/kovio/Nav'
import Footer from '@/components/kovio/Footer'
import EarlyAccessForm from '@/components/kovio/EarlyAccessForm'
import { palette as p, fonts } from '@/components/kovio/palette'
import { Tag } from '@/components/kovio/primitives'

export const metadata = {
  title: 'Sign up for Early Access · Kovio',
  description:
    'Join the founding cohort of brands advertising through autonomous robots. Live now in San Francisco. Early access is closing soon — claim your spot.',
}

export default function EarlyAccessPage() {
  return (
    <main style={{ background: p.bg, color: p.fg, minHeight: '100vh' }}>
      <Nav />
      <section
        className="kovio-section"
        style={{
          position: 'relative',
          maxWidth: 1320,
          margin: '0 auto',
          padding: '72px 32px 24px',
        }}
      >
        <div style={{ maxWidth: 760 }}>
          <Tag>EARLY ACCESS / FOR BRANDS</Tag>
          <h1
            style={{
              fontFamily: fonts.display,
              fontSize: 'clamp(48px, 7vw, 88px)',
              lineHeight: 0.95,
              letterSpacing: '-0.035em',
              margin: '18px 0 24px',
              color: p.fg,
              fontWeight: 500,
              textWrap: 'balance',
            }}
          >
            Sign up for{' '}
            <span style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontWeight: 400 }}>
              early access
            </span>
            .
          </h1>
          <p style={{ color: p.fgDim, fontSize: 19, lineHeight: 1.55, maxWidth: 600 }}>
            Be one of the first brands to advertise through autonomous robots — running right now on
            our live San Francisco fleet across the{' '}
            <span style={{ color: p.fg }}>Marina, Hayes Valley, the Mission, and the Embarcadero</span>.
            Founding brands get first placement and launch pricing. Spots are limited and going fast.
          </p>
        </div>
      </section>

      <section
        className="kovio-section"
        style={{
          maxWidth: 640,
          margin: '0 auto',
          padding: '24px 32px 120px',
        }}
      >
        <EarlyAccessForm />
      </section>
      <Footer />
    </main>
  )
}
