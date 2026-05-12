import Nav from '@/components/kovio/Nav'
import Footer from '@/components/kovio/Footer'
import ContactForm from '@/components/ContactForm'
import { palette as p, fonts } from '@/components/kovio/palette'
import { Tag } from '@/components/kovio/primitives'

export default function ContactPage() {
  return (
    <main style={{ background: p.bg, color: p.fg, minHeight: '100vh' }}>
      <Nav />
      <section
        className="kovio-section"
        style={{
          position: 'relative',
          maxWidth: 1320,
          margin: '0 auto',
          padding: '80px 32px 24px',
        }}
      >
        <div style={{ maxWidth: 720 }}>
          <Tag>SECTION 06 / Contact</Tag>
          <h1
            style={{
              fontFamily: fonts.display,
              fontSize: 'clamp(40px, 5vw, 72px)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              margin: '16px 0 24px',
              color: p.fg,
              fontWeight: 500,
              textWrap: 'balance',
            }}
          >
            Get in{' '}
            <span style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontWeight: 400 }}>
              touch
            </span>
            .
          </h1>
          <p style={{ color: p.fgDim, fontSize: 18, lineHeight: 1.5, maxWidth: 560 }}>
            Whether you&apos;re a robot company looking to monetize or a brand ready to reach the
            robot economy, we&apos;d love to hear from you.
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
        <ContactForm />
      </section>
      <Footer />
    </main>
  )
}
