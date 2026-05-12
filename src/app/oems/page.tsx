import Link from 'next/link'
import Nav from '@/components/kovio/Nav'
import Footer from '@/components/kovio/Footer'
import { palette as p, fonts } from '@/components/kovio/palette'
import { LiveDot, Tag } from '@/components/kovio/primitives'
import {
  CampaignApprovals,
  ContentPolicy,
  CpmFloor,
  NowPlaying,
  OemDashboardFrame,
  OemHeader,
  OemMetricsRow,
  RevenueByRoute,
  RevenueOverTime,
} from '@/components/kovio/OemDashboard'

export const metadata = {
  title: 'OEMs · Kovio',
  description:
    'The fleet operator console: turn every robot into a revenue line item. Watch live campaigns, approve advertisers, set CPM floors and brand safety rules — and withdraw earnings.',
}

export default function OemsPage() {
  return (
    <main style={{ background: p.bg, color: p.fg, minHeight: '100vh' }}>
      <Nav />

      {/* HERO */}
      <section
        className="kovio-section"
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '60px 32px 40px',
        }}
      >
        <Tag>
          <LiveDot /> The Kovio Fleet Operator Console
        </Tag>
        <h1
          style={{
            fontFamily: fonts.display,
            fontSize: 'clamp(40px, 5.4vw, 80px)',
            lineHeight: 0.98,
            letterSpacing: '-0.035em',
            fontWeight: 500,
            margin: '20px 0 22px',
            color: p.fg,
            textWrap: 'balance',
            maxWidth: 1100,
          }}
        >
          Turn every robot you operate into a{' '}
          <span style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontWeight: 400 }}>
            revenue line item
          </span>
          .
        </h1>
        <p
          style={{
            maxWidth: 720,
            fontSize: 19,
            lineHeight: 1.45,
            color: p.fgDim,
            margin: 0,
          }}
        >
          The console fleet operators log into: see which campaigns are running on which units,
          approve or reject advertisers, lock your brand-safety policy, set a CPM floor — and
          withdraw earnings on demand. Below is the same screen Roamr uses today.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '14px 20px',
              background: p.accent,
              color: p.accentInk,
              fontFamily: fonts.mono,
              fontSize: 13,
              letterSpacing: '0.03em',
              fontWeight: 600,
              borderRadius: 999,
              textDecoration: 'none',
            }}
          >
            Connect a fleet →
          </Link>
          <Link
            href="/docs"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '14px 20px',
              background: 'transparent',
              color: p.fg,
              fontFamily: fonts.mono,
              fontSize: 13,
              letterSpacing: '0.03em',
              fontWeight: 500,
              borderRadius: 999,
              textDecoration: 'none',
              border: `1px solid ${p.lineStrong}`,
            }}
          >
            Read SDK docs
          </Link>
        </div>
      </section>

      {/* DASHBOARD SHOWCASE — graphs only.
          The live feed, approvals queue, content policy, and CPM floor each
          get their own explained section below, so we don't duplicate them. */}
      <section
        className="kovio-section"
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '20px 32px 80px',
        }}
      >
        <OemDashboardFrame>
          <OemHeader />
          <OemMetricsRow />
          <div className="kovio-row-2" style={{ display: 'flex', gap: 12 }}>
            <RevenueOverTime />
            <RevenueByRoute />
          </div>
        </OemDashboardFrame>
      </section>

      {/* SECTION WALKTHROUGH */}
      <DashboardSection
        kicker="01 / EARNINGS"
        title="See what every robot earned, every period."
        body="Total earnings, impressions served, active campaigns on your units, fleet utilization, average eCPM, and the number of approvals waiting on you. Six numbers that tell you whether your fleet is monetizing or sitting idle."
        stacked
      >
        <OemMetricsRow />
      </DashboardSection>

      <DashboardSection
        kicker="02 / TREND"
        title="Six months of revenue at a glance."
        body="The line that shows your fleet flipping from cost center to revenue line. Roamr's last six months: $2K in December, $56,400 in May — a 32% month-over-month curve as more advertisers came online."
      >
        <RevenueOverTime />
      </DashboardSection>

      <DashboardSection
        kicker="03 / ROUTES"
        title="Which zones make you money."
        body="Revenue ranked by delivery zone — University District is paying for the rest of the fleet. Use it to decide where to expand, where to retire units, and how to price your CPM floor per neighborhood."
        flip
      >
        <RevenueByRoute />
      </DashboardSection>

      <DashboardSection
        kicker="04 / LIVE FEED"
        title="Watch your fleet serve ads in real time."
        body="Every robot currently running a paid impression — unit ID, campaign, advertiser, creative, route, and when it started. The live feed is the heartbeat: if a unit goes offline, it falls off the list within seconds."
        stacked
      >
        <NowPlaying />
      </DashboardSection>

      <DashboardSection
        kicker="05 / APPROVALS"
        title="You decide who runs on your robots."
        body="Every new campaign lands in your approval queue with the full brief: who, what, when, how much, and what the creative actually looks like. Approve, reject, or flag for review — and Kovio catches policy edge cases like competitor mentions before you do."
        stacked
      >
        <CampaignApprovals />
      </DashboardSection>

      <DashboardSection
        kicker="06 / POLICY & FLOOR"
        title="Set the rules. The network enforces them."
        body="Block whole categories with one click — alcohol, political, adult content, gambling — and choose how strictly creatives are screened before going live. Pair it with a CPM floor and Kovio only routes bids that clear your bar."
        stacked
      >
        <div className="kovio-row-2" style={{ display: 'flex', gap: 12 }}>
          <ContentPolicy />
          <CpmFloor />
        </div>
      </DashboardSection>

      {/* CTA */}
      <section
        className="kovio-section"
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '40px 32px 120px',
        }}
      >
        <div
          className="kovio-cta-card"
          style={{
            background: p.accent,
            color: p.accentInk,
            borderRadius: 20,
            padding: '56px 48px',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 32,
            alignItems: 'center',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                letterSpacing: '0.06em',
                color: 'rgba(241,237,226,0.65)',
              }}
            >
              FOR FLEET OPERATORS
            </span>
            <h3
              style={{
                margin: '12px 0 14px',
                fontFamily: fonts.display,
                fontSize: 'clamp(28px, 3vw, 44px)',
                fontWeight: 500,
                letterSpacing: '-0.025em',
                lineHeight: 1.05,
                color: p.accentInk,
              }}
            >
              Your fleet is already on the routes. Now make it earn.
            </h3>
            <p
              style={{
                margin: 0,
                color: 'rgba(241,237,226,0.85)',
                fontSize: 16,
                lineHeight: 1.5,
                maxWidth: 560,
              }}
            >
              The SDK is a drop-in for delivery, sidewalk, humanoid, and indoor fleets. Tell us
              who you are and we&apos;ll provision a console for your operations team.
            </p>
          </div>
          <div
            className="kovio-cta-card-buttons"
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end' }}
          >
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 22px',
                background: p.fg,
                color: p.accent,
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.03em',
                borderRadius: 999,
                textDecoration: 'none',
              }}
            >
              Connect a fleet →
            </Link>
            <Link
              href="/docs"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 22px',
                background: 'transparent',
                color: p.accentInk,
                fontFamily: fonts.mono,
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.03em',
                borderRadius: 999,
                textDecoration: 'none',
                border: '1px solid rgba(241,237,226,0.45)',
              }}
            >
              Read SDK docs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function DashboardSection({
  kicker,
  title,
  body,
  flip,
  stacked,
  children,
}: {
  kicker: string
  title: string
  body: string
  flip?: boolean
  stacked?: boolean
  children: React.ReactNode
}) {
  const copy = (
    <div style={{ maxWidth: stacked ? 760 : undefined }}>
      <span
        style={{
          fontFamily: fonts.mono,
          fontSize: 11,
          color: p.fgMute,
          letterSpacing: '0.08em',
        }}
      >
        {kicker}
      </span>
      <h3
        style={{
          margin: '14px 0 16px',
          fontFamily: fonts.display,
          fontSize: 'clamp(28px, 3vw, 42px)',
          fontWeight: 500,
          letterSpacing: '-0.025em',
          lineHeight: 1.05,
          color: p.fg,
          textWrap: 'balance',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: 0,
          color: p.fgDim,
          fontSize: 16,
          lineHeight: 1.55,
          maxWidth: 600,
        }}
      >
        {body}
      </p>
    </div>
  )

  return (
    <section
      className="kovio-section kovio-section-tight"
      style={{
        maxWidth: 1320,
        margin: '0 auto',
        padding: '64px 32px',
        borderTop: `1px solid ${p.line}`,
      }}
    >
      {stacked ? (
        <>
          <div style={{ marginBottom: 40 }}>{copy}</div>
          <div style={{ minWidth: 0 }}>{children}</div>
        </>
      ) : (
        <div
          className="kovio-header-2col"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.85fr 1.15fr',
            gap: 56,
            alignItems: 'center',
          }}
        >
          <div style={{ order: flip ? 2 : 1 }}>{copy}</div>
          <div style={{ order: flip ? 1 : 2, minWidth: 0 }}>{children}</div>
        </div>
      )}
    </section>
  )
}
