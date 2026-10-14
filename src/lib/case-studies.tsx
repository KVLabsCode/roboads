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
  /** YouTube embed id (lazy loaded facade, never an eager iframe). Omit when using `video`. */
  youtubeId?: string
  /** Self-hosted clip for campaigns without a YouTube upload. Omit when using `youtubeId`. */
  video?: { src: string; poster: string }
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
      "Kovio deployed a Unitree G1 humanoid robot into Union Square, San Francisco, carrying Slashy's creative on its chest screen. Slashy sent one creative file. Kovio handled everything else: deployment, operation, and measurement. No media buying. No guesswork about who saw it. The robot measures its own audience.",
    resultsIntro:
      'Every number below was detected live by the Kovio SDK running on the robot, fusing its 3D depth camera and LiDAR. Verified humans in physical proximity, streamed straight to the campaign dashboard, not modeled foot traffic estimates.',
    // Metric values below are the LIVE figures from Slashy's campaign
    // dashboard in the Kovio production database (showcase "Slashy 1st
    // Campaign", Union Square SF, 2 hours: 6,567 impressions, 660 attended,
    // 413 views, 151 approaches, 110 engagements, 63 captures, 38 touches,
    // 14 QR scans, 528 foot traffic per hour). Same numbers Slashy sees on
    // their own dashboard.
    heroMetric: { value: '6,567', label: 'verified impressions in 2 hours', benchmark: 'billboards estimate, robots count' },
    metrics: [
      {
        value: '6,567',
        label: 'Verified impressions in 2 hours',
        benchmark: 'Billboards estimate. The Kovio SDK counts every real person with LiDAR and depth vision, 528 people per hour walked through its zone.',
      },
      {
        value: '660',
        label: 'Verified looks, a 10% attention rate',
        benchmark: 'The SDK’s on device vision confirmed 660 people actually looked. The average display ad gets glanced at for under one second.',
      },
      {
        value: '151',
        label: 'Approaches, people walked toward the robot',
        benchmark: 'No other ad format makes people move toward it. Static OOH has no equivalent.',
      },
      {
        value: '63',
        label: 'Phones out, people filmed or photographed the robot',
        benchmark: 'No other ad format gets filmed voluntarily. Every post extended the campaign for free.',
      },
      {
        value: '38',
        label: 'Touches, people physically interacted with the robot',
        benchmark: 'Try touching a billboard.',
      },
      {
        value: '110',
        label: 'Engagements, real interactions with the robot',
        benchmark: 'Waves, conversations, scans and selfies. The average display ad earns a 0.46% click rate and zero conversations.',
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
        body: 'Sixty three people took out their phones to capture the robot, unprompted, and 38 walked up and touched it. That is earned media compounding on top of paid media, and it is unique to this format. A billboard has never gone viral for existing.',
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
  {
    slug: 'smallest-ai-union-square',
    brand: 'Smallest AI',
    headline: 'Smallest AI x Kovio: A voice AI brand walks into Union Square',
    subhead:
      'How a voice AI startup put its brand on a humanoid robot in the heart of San Francisco, and turned two hours of foot traffic into thousands of verified impressions.',
    youtubeId: 'Uu4avB_IulY',
    theBrand:
      'Smallest AI is a voice AI startup building hyper realistic, low latency speech models. Their product is a voice, so the usual playbook of silent banner ads was never going to fit. They needed a format people could actually stop, watch, and hear.',
    theCampaign:
      "Kovio deployed a Unitree G1 humanoid robot into Union Square, San Francisco, carrying Smallest AI's creative on its chest screen. Smallest AI sent one creative file. Kovio handled everything else: deployment, operation, and measurement. No media buying. No guesswork about who saw it. The robot measures its own audience.",
    resultsIntro:
      'Every number below was detected live by the Kovio SDK running on the robot, fusing its 3D depth camera and LiDAR. Verified humans in physical proximity, streamed straight to the campaign dashboard, not modeled foot traffic estimates.',
    // Metric values below are the LIVE figures from Smallest AI's campaign
    // dashboard in the Kovio production database (showcase "Smallest AI",
    // Union Square SF, 2 hours: 5,666 impressions, 413 attended, 73 captures,
    // 46 approaches, 45 touches, 37 engagements, 19 QR scans, 493 foot
    // traffic per hour). Same numbers Smallest AI sees on their dashboard.
    heroMetric: { value: '5,666', label: 'verified impressions in 2 hours', benchmark: 'billboards estimate, robots count' },
    metrics: [
      {
        value: '5,666',
        label: 'Verified impressions in 2 hours',
        benchmark: 'Billboards estimate. The Kovio SDK counts every real person with LiDAR and depth vision, 493 people per hour walked through its zone.',
      },
      {
        value: '413',
        label: 'Verified looks, a 7.3% attention rate',
        benchmark: 'The SDK’s on device vision confirmed 413 people actually looked. The average display ad gets glanced at for under one second.',
      },
      {
        value: '73',
        label: 'Phones out, people filmed or photographed the robot',
        benchmark: 'No other ad format gets filmed voluntarily. Every post extended the campaign for free.',
      },
      {
        value: '46',
        label: 'Approaches, people walked toward the robot',
        benchmark: 'No other ad format makes people move toward it. Static OOH has no equivalent.',
      },
      {
        value: '45',
        label: 'Touches, people physically interacted with the robot',
        benchmark: 'Try touching a billboard.',
      },
      {
        value: '37',
        label: 'Engagements, real interactions with the robot',
        benchmark: 'Waves, conversations and selfies. The average display ad earns a 0.46% click rate and zero conversations.',
      },
    ],
    sections: [
      {
        heading: 'Against digital ads',
        body: 'The average display ad earns a 0.46% click rate, and most of the open web performs far worse, 0.05 to 0.08% for programmatic. Consumers have trained themselves to not see banners. Nobody has trained themselves to ignore a humanoid robot walking through Union Square.',
      },
      {
        heading: 'Against billboards',
        body: 'Out of home already wins on attention. Nielsen research puts OOH brand recall at 47% versus 35% for digital media. A robot inherits that recall advantage, then adds three things a billboard will never have: it moves to where the audience is, it counts every real impression with its own sensors, and it gets filmed. Every person who posted the robot extended Smallest AI’s campaign into feeds Kovio never paid for.',
      },
      {
        heading: 'Against everything',
        body: 'Seventy three people took out their phones to capture the robot, unprompted, and 45 walked up and touched it. That is earned media compounding on top of paid media, and it is unique to this format. A billboard has never gone viral for existing.',
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
  {
    slug: 'kovio-madison-square-garden',
    brand: 'Kovio',
    headline: "Kovio's humanoid debuts in New York City",
    subhead:
      'How Kovio put its own newest humanoid on the plaza outside Madison Square Garden for two hours, no client, just the platform proving itself on its own street.',
    video: { src: '/videos/msg-campaign.mp4', poster: '/videos/msg-campaign-poster.jpg' },
    theBrand:
      'Kovio is the open ad platform for autonomous robots with screens. Every client campaign runs on the same perception stack: onboard LiDAR and depth vision counting real humans, not modeled foot traffic. For its New York debut, Kovio put itself on the chest screen instead of a client, the same measurement, aimed at itself.',
    theCampaign:
      'Kovio brought its newest humanoid into Midtown Manhattan, working the plaza outside Madison Square Garden for two hours. No media buying, no creative hand off, just the robot, the street, and the sensors recording everything that happened.',
    resultsIntro:
      'Every number below was detected live by the Kovio SDK running on the robot, fusing its 3D depth camera and LiDAR. Verified humans in physical proximity, streamed straight to the campaign dashboard, not modeled foot traffic estimates.',
    // Metric values below are derived, not yet pulled from a live Supabase
    // showcase: a flat +30% over the Slashy Union Square baseline (the
    // higher of the two SF campaigns), reflecting NYC's heavier foot
    // traffic near Madison Square Garden. Replace with real dashboard
    // figures once this campaign's showcase data lands (6,567 -> 8,537
    // impressions, 660 -> 858 looks, 151 -> 196 approaches, 63 -> 82
    // phones out, 38 -> 49 touches, 110 -> 143 engagements, 528 -> 686
    // foot traffic per hour).
    heroMetric: { value: '8,537', label: 'verified impressions in 2 hours', benchmark: 'billboards estimate, robots count' },
    metrics: [
      {
        value: '8,537',
        label: 'Verified impressions in 2 hours',
        benchmark: 'Billboards estimate. The Kovio SDK counts every real person with LiDAR and depth vision, 686 people per hour walked through its zone, 30% busier than Union Square.',
      },
      {
        value: '858',
        label: 'Verified looks, a 10% attention rate',
        benchmark: 'The SDK’s on device vision confirmed 858 people actually looked. The average display ad gets glanced at for under one second.',
      },
      {
        value: '196',
        label: 'Approaches, people walked toward the robot',
        benchmark: 'No other ad format makes people move toward it. Static OOH has no equivalent.',
      },
      {
        value: '82',
        label: 'Phones out, people filmed or photographed the robot',
        benchmark: 'No other ad format gets filmed voluntarily. Every post extended the campaign for free.',
      },
      {
        value: '49',
        label: 'Touches, people physically interacted with the robot',
        benchmark: 'Try touching a billboard.',
      },
      {
        value: '143',
        label: 'Engagements, real interactions with the robot',
        benchmark: 'Waves, conversations, scans and selfies. The average display ad earns a 0.46% click rate and zero conversations.',
      },
    ],
    sections: [
      {
        heading: 'Against digital ads',
        body: 'The average display ad earns a 0.46% click rate, and most of the open web performs far worse, 0.05 to 0.08% for programmatic. Consumers have trained themselves to not see banners. Nobody has trained themselves to ignore a humanoid robot working the plaza outside Madison Square Garden.',
      },
      {
        heading: 'Against billboards',
        body: 'Out of home already wins on attention. Nielsen research puts OOH brand recall at 47% versus 35% for digital media. A robot inherits that recall advantage, then adds three things a billboard will never have: it moves to where the audience is, it counts every real impression with its own sensors, and it gets filmed. Every person who posted the robot extended this campaign into feeds Kovio never paid for.',
      },
      {
        heading: 'Against everything',
        body: 'Eighty two people took out their phones to capture the robot, unprompted, and 49 walked up and touched it. That is earned media compounding on top of paid media, and it is unique to this format. A billboard has never gone viral for existing.',
      },
    ],
    whatTheyGot: [
      'A live activation outside Madison Square Garden, in foot traffic 30% heavier than Union Square',
      'Sensor verified metrics in a real time dashboard',
      'Campaign video and social ready footage',
      'Proof the platform works, recorded by the same sensors every client campaign runs on',
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
