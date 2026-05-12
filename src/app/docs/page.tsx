import DocsSignIn from '@/components/kovio/DocsSignIn'
import Nav from '@/components/kovio/Nav'
import Footer from '@/components/kovio/Footer'
import { palette as p } from '@/components/kovio/palette'

export const metadata = {
  title: 'Docs · Kovio',
  description:
    'Kovio developer documentation. Access is invite-only — sign in with the credentials you were issued.',
}

export default function DocsPage() {
  return (
    <main style={{ background: p.bg, color: p.fg, minHeight: '100vh' }}>
      <Nav />
      <DocsSignIn />
      <Footer />
    </main>
  )
}
