export const ROLES = [
  {
    title: "Robotics Engineer",
    location: "San Francisco, on site",
    summary: "Own the robot end to end: the head, the sensors, the power and Kovio OS on the G1 platform.",
    bullets: [
      "Build the head module: LED face, moving ears, cameras and mics",
      "Write robot software in ROS 2 and Python",
      "Take designs from prototype to a robot we build to order",
    ],
    fit: "You have shipped robots or hardware, and you are as happy with a soldering iron as a keyboard.",
  },
  {
    title: "Forward Deployed Engineer",
    location: "San Francisco, on site",
    summary: "Make our robots work in the real world, at venues, events and brand campaigns.",
    bullets: [
      "Deploy and run robots on site",
      "Fix what breaks, fast, in front of a crowd",
      "Turn what you see in the field into product and tools",
    ],
    fit: "You are an engineer who likes being around people, and nothing in the field scares you.",
  },
  {
    title: "Monetization Lead",
    location: "San Francisco, on site",
    summary: "Own how every robot makes money: pricing, ad formats and the network that fills them.",
    bullets: [
      "Set pricing and rate cards for events and the network",
      "Build the programmatic side: measurement, the SDK and demand partners",
      "Grow revenue per robot, campaign by campaign",
    ],
    fit: "You have scaled ad revenue at a mobile, gaming or ad tech company, and you think in yield.",
  },
] as const;

export const ROLE_TITLES = ROLES.map((r) => r.title) as unknown as readonly [string, ...string[]];
