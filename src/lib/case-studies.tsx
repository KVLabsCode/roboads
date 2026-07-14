import type { ReactNode } from 'react'

// ---------------------------------------------------------------------------
// Case-study content collection. One entry per case study; the template at
// /case-studies/[slug] renders any entry, the index lists them.
//
// Anything wrapped in [square brackets] inside copy is an UNRESOLVED
// PLACEHOLDER: `withPlaceholders()` renders it visibly highlighted so it can
// never ship unnoticed. Keep `published: false` until every bracket is gone.
// ---------------------------------------------------------------------------

export interface CaseMetric {
  value: string
  label: string
  benchmark: string
}

export interface CaseSection {
  heading: string
  body: string
}

export interface CaseStudy {
  slug: string
  brand: string
  headline: string
  subhead: string
  /** YouTube embed id (lazy loaded facade, never an eager iframe). */
  youtubeId: string
  theBrand: string
  theCampaign: string
  resultsIntro: string
  metrics: CaseMetric[]
  heroMetric: CaseMetric
  sections: CaseSection[]
  whatTheyGot: string[]
  testimonial?: { quote: string; name: string; title: string }
  published: boolean
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'slashy-union-square',
    brand: 'Slashy',
    headline: 'Slashy x Kovio: A humanoid robot brand activation in Union Square',
    subhead:
      'How a YC startup put its brand on a walking billboard in the busiest square in San Francisco, and outperformed digital advertising benchmarks by an order of magnitude.',
    youtubeId: 'mk7ivLbCYNc',
    theBrand:
      'Slashy is a YC backed startup building The Intelligent Inbox. Like every early stage company, their challenge was simple: get noticed in the loudest market in the world, without burning a seed budget on ads people scroll past.',
    theCampaign:
      "Kovio deployed a Unitree G1 humanoid robot into Union Square, San Francisco, carrying Slashy's creative on its chest screen with a QR code linking straight to Slashy. Slashy sent one creative file. Kovio handled everything else: deployment, operation, and measurement. No media buying. No guesswork about who saw it. The robot measures its own audience.",
    resultsIntro:
      'The audience numbers below were captured live by the robot’s onboard sensors, a 3D depth camera and LiDAR. These are verified humans in physical proximity, not modeled foot traffic estimates. Figures counted from the campaign footage are labeled as such.',
    // Sensor metrics below are LIVE dashboard figures pulled from the Kovio
    // production database (G1 street sessions, July 8 and July 10, 2026:
    // 266 unique verified passersby, 136 paused 3s+, 111 engaged 6s+,
    // 81 deep dwell 12s+, 52 close approaches, 207 minutes total).
    // Phones-out and QR scans have no sensor source: they are conservative
    // counts from the campaign footage and are labeled that way on the card.
    heroMetric: { value: '51%', label: 'of passersby stopped', benchmark: 'static OOH has no equivalent' },
    metrics: [
      {
        value: '266',
        label: 'Verified impressions in 3.5 hours',
        benchmark: 'Billboards estimate. Robots count every real person with LiDAR and depth vision.',
      },
      {
        value: '51%',
        label: 'Stop rate, 136 of 266 passersby paused',
        benchmark: 'Static OOH has no equivalent. Nobody stops for a billboard.',
      },
      {
        value: '12.1s',
        label: 'Average deep dwell, 81 people held 12 seconds or more',
        benchmark: '5.32 seconds is considered exceptional for place based OOH (Limited Space eye tracking study).',
      },
      {
        value: '111',
        label: 'Engaged viewers, locked in for 6 seconds or more',
        benchmark: 'The average display ad gets glanced at for under one second.',
      },
      {
        value: '52',
        label: 'Close approaches, people walked up within arm’s reach',
        benchmark: 'No other ad format makes people walk toward it.',
      },
      {
        value: '100+',
        label: 'Phones out, people filmed or photographed the robot',
        benchmark: 'Counted from campaign footage. No other ad format gets filmed voluntarily.',
      },
      {
        value: '10+',
        label: 'QR scans straight from the sidewalk, a 3.8% scan rate',
        benchmark: 'Counted from the activation. The average display ad CTR is 0.46%, open web programmatic runs 0.05 to 0.08%.',
      },
    ],
    sections: [
      {
        heading: 'Against digital ads',
        body: 'The average display ad earns a 0.46% click rate, and most of the open web performs far worse, 0.05 to 0.08% for programmatic. Consumers have trained themselves to not see banners. Nobody has trained themselves to ignore a humanoid robot walking through Union Square.',
      },
      {
        heading: 'Against billboards',
        body: 'Out of home already wins on attention. Nielsen research puts OOH brand recall at 47% versus 35% for digital media. A robot inherits that recall advantage, then adds three things a billboard will never have: it moves to where the audience is, it counts every real impression with its own sensors, and it gets filmed. Every person who posted the robot extended Slashy’s campaign into feeds Kovio never paid for.',
      },
      {
        heading: 'Against everything',
        body: 'Over one hundred people took out their phones to capture the robot, unprompted. That is earned media compounding on top of paid media, and it is unique to this format. A billboard has never gone viral for existing.',
      },
    ],
    whatTheyGot: [
      'A live activation in premium San Francisco foot traffic',
      'Sensor verified metrics in a real time dashboard',
      'Campaign video and social ready footage',
      'Earned media from passersby posting the robot',
    ],
    published: true,
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug)
}

export function publishedCaseStudies(): CaseStudy[] {
  return CASE_STUDIES.filter((c) => c.published)
}

export function draftCaseStudies(): CaseStudy[] {
  return CASE_STUDIES.filter((c) => !c.published)
}

export function hasPlaceholders(c: CaseStudy): boolean {
  return /\[[^\]]+\]/.test(JSON.stringify(c))
}

/** Render copy with any [unresolved placeholder] loudly highlighted. */
export function withPlaceholders(text: string): ReactNode {
  const parts = text.split(/(\[[^\]]+\])/g)
  return parts.map((part, i) =>
    part.startsWith('[') && part.endsWith(']') ? (
      <mark
        key={i}
        className="rounded-md border-2 border-[#141414] bg-[#D97757] px-1.5 py-0.5 font-bold text-[#141414]"
        title="Unresolved placeholder, replace before publishing"
      >
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}
