import Link from 'next/link'
import Nav from '@/components/kovio/Nav'
import Footer from '@/components/kovio/Footer'
import { palette as p, fonts } from '@/components/kovio/palette'
import { LiveDot, Tag } from '@/components/kovio/primitives'
import {
  ActivityFeed,
  CampaignsTable,
  DashboardFrame,
  DashboardHeader,
  EnvironmentList,
  MetricsRow,
  OEMBreakdown,
  PerformanceChart,
} from '@/components/kovio/BrandsDashboard'

export const metadata = {
  title: 'Brands · Kovio',
  description:
    'The brand console: run real-world campaigns through real robots. Spend, scans, dwell, attribution — all measured per verified human interaction.',
}

export default function BrandsPage() {
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
          <LiveDot /> The Kovio Brand Console
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
          Buy{' '}
          <span style={{ fontFamily: fonts.serif, fontStyle: 'italic', fontWeight: 400 }}>
            real-world
          </span>{' '}
          attention. Pay per verified interaction.
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
          The console brands log into: launch campaigns, route bids across robot fleets, watch
          verified humans engage in real time. Below is the same screen DoorDash sees today.
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
            Request a brand seat →
          </Link>
        </div>
      </section>

      {/* DASHBOARD SHOWCASE — graphs only.
          The campaigns table, OEM breakdown, and live activity feed each get
          their own explained section below, so we don't duplicate them here. */}
      <section
        className="kovio-section"
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '20px 32px 80px',
        }}
      >
        <DashboardFrame>
          <DashboardHeader />
          <MetricsRow />
          <div className="kovio-row-2" style={{ display: 'flex', gap: 12 }}>
            <PerformanceChart />
            <EnvironmentList />
          </div>
        </DashboardFrame>
      </section>

      {/* SECTION-BY-SECTION WALKTHROUGH */}
      <DashboardSection
        kicker="01 / OVERVIEW"
        title="Six metrics that matter, refreshed every minute."
        body="Spend, impressions, engagement rate, QR scans, average dwell, cost per thousand views. Every card rolls up the same atomic event stream — no SDK polling, no batch jobs. If a robot interaction happens, you see it within 60 seconds."
        stacked
      >
        <MetricsRow />
      </DashboardSection>

      <DashboardSection
        kicker="02 / TIME SERIES"
        title="Daily spend vs engagement, side by side."
        body="The line you actually want to see: more spend correlating with more engagement, not just more impressions. Switch the right axis to scans, dwell, or revenue lift at any time. Hover any day for the underlying interaction log."
      >
        <PerformanceChart />
      </DashboardSection>

      <DashboardSection
        kicker="03 / ENVIRONMENT MIX"
        title="See where your dollars land."
        body="Retail aisles, sidewalks, hotel lobbies, home robots, hospitals — each environment is bid for independently. The mix shifts as new fleets come online, and the conversion column tells you which surfaces are actually doing the work."
        flip
      >
        <EnvironmentList />
      </DashboardSection>

      <DashboardSection
        kicker="04 / CAMPAIGN MANAGEMENT"
        title="Real campaigns. Real status. Real budgets."
        body="Five campaigns visible at a glance: three live, one paused, one in draft. Status flips in real time as your bids win, your budget caps, or your A/B variant ships. Click any row to drill into the per-unit attribution chain."
        stacked
      >
        <CampaignsTable />
      </DashboardSection>

      <DashboardSection
        kicker="05 / FLEET BREAKDOWN"
        title="Which OEM is delivering your reach?"
        body="One stacked bar across every fleet operator running your creative. Starship, Bear, Pudu — different floors of different cities, all reconciled against one budget. Adjust pacing per operator without touching the others."
        flip
      >
        <OEMBreakdown />
      </DashboardSection>

      <DashboardSection
        kicker="06 / LIVE EVENTS"
        title="A verified interaction every few seconds."
        body="The live activity stream is the heartbeat: a QR scan at Stanford, a 6-second dwell at MIA, a verbal completion in a Le Méridien lobby. Each event is signed by the robot, geo-fenced, and priced. Receipts on every dollar spent."
      >
        <ActivityFeed />
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
              FOR BRANDS
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
              Ready to run a campaign through every robot you walk past?
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
              Brand seats are invite-only while we onboard pilot advertisers. Tell us who you are
              and we&apos;ll get you a console.
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
              Request access →
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
  /** When true, render copy on top and the visual full-width below — for dense visuals
   *  like the metrics row and the campaigns table that don't fit a side column. */
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
