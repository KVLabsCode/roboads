export const SITE_NAME = "Kovio";
export const SITE_TAGLINE = "The Monetization Layer for the Robot Economy";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "For Manufacturers", href: "/for-manufacturers" },
  { label: "For Advertisers", href: "/for-advertisers" },
];

export const TIMELINE_ERAS = [
  { year: "2000s", label: "Web", description: "Banner ads, search ads" },
  { year: "2010s", label: "Mobile", description: "App installs, in-feed ads" },
  { year: "2015s", label: "Social", description: "Influencer, stories, reels" },
  { year: "2020s", label: "AI Chat", description: "Sponsored answers, plugins" },
  { year: "2025+", label: "Physical AI", description: "Decision auctions, robot commerce" },
];

export const ROBOT_TYPES_2030 = [
  { name: "Home Assistants", count: "500M+", icon: "🏠", source: "ABI Research 2024" },
  { name: "Delivery Robots", count: "50M+", icon: "📦", source: "McKinsey 2024" },
  { name: "Retail Floor Robots", count: "10M+", icon: "🏪", source: "Interact Analysis" },
  { name: "Warehouse Robots", count: "20M+", icon: "🏭", source: "LogisticsIQ" },
  { name: "Agricultural Drones", count: "15M+", icon: "🌾", source: "Drone Industry Insights" },
  { name: "Healthcare Robots", count: "5M+", icon: "🏥", source: "Grand View Research" },
];

/* ═══════════════════════════════════════════════════
   MARKET DATA - sourced projections for credibility
   ═══════════════════════════════════════════════════ */

export const MARKET_STATS = [
  {
    value: "$50B",
    label: "Physical AI Market Today",
    year: "2025",
    source: "ABI Research",
    growth: null,
  },
  {
    value: "$111B+",
    label: "Projected by 2030",
    year: "2030",
    source: "ABI Research",
    growth: "22% CAGR",
  },
  {
    value: "$5T",
    label: "Humanoid Robot TAM",
    year: "2050",
    source: "Morgan Stanley",
    growth: null,
  },
  {
    value: "$38B",
    label: "Humanoid Market by 2035",
    year: "2035",
    source: "Goldman Sachs",
    growth: "15-30% CAGR",
  },
];

export const GROWTH_CHART_DATA = [
  { year: "2023", value: 32, label: "$32B" },
  { year: "2024", value: 41, label: "$41B" },
  { year: "2025", value: 50, label: "$50B", highlight: true },
  { year: "2026", value: 61, label: "$61B" },
  { year: "2027", value: 74, label: "$74B" },
  { year: "2028", value: 86, label: "$86B" },
  { year: "2029", value: 98, label: "$98B" },
  { year: "2030", value: 111, label: "$111B+", highlight: true },
];

export const FIRST_MOVER_STATS = [
  { metric: "3", label: "Lines of Code to Integrate", detail: "Drop-in SDK" },
  { metric: "70%", label: "Revenue Share", detail: "For manufacturers" },
  { metric: "94%", label: "Decision-to-Action Rate", detail: "Near-guaranteed conversion" },
  { metric: "0", label: "UX Impact", detail: "Zero disruption" },
];

export const MARKET_MILESTONES = [
  { year: "2024", event: "4M+ industrial robots deployed worldwide", source: "IFR" },
  { year: "2025", event: "Tesla, Figure AI, Boston Dynamics scaling humanoids", source: "Industry" },
  { year: "2026", event: "Home robots enter mass consumer market", source: "ABI Research" },
  { year: "2028", event: "Robot-mediated commerce exceeds $68B annually", source: "Projected" },
  { year: "2030", event: "600M+ robots making daily commercial decisions", source: "ABI Research" },
];

export const KITCHEN_AUCTION_STEPS = [
  {
    step: 1,
    title: "Trigger",
    description: "Home robot detects milk is low. Initiates restock decision.",
  },
  {
    step: 2,
    title: "Auction Opens",
    description: "Kovio broadcasts intent: 'Milk restock needed, 2% organic preferred.'",
  },
  {
    step: 3,
    title: "Brands Bid",
    description: "Horizon Organic, Oatly, Fairlife submit real-time bids.",
  },
  {
    step: 4,
    title: "Decision Made",
    description: "Highest value bid wins. Robot adds winner to shopping list.",
  },
];

export const AUCTION_BIDS = [
  { brand: "Horizon Organic", bid: 0.42, color: "#00d4ff" },
  { brand: "Oatly", bid: 0.38, color: "#00ff88" },
  { brand: "Fairlife", bid: 0.35, color: "#ff6b6b" },
  { brand: "Store Brand", bid: 0.15, color: "#888888" },
];

export const NEW_AD_SURFACES = [
  {
    title: "Decision Auctions",
    description: "Real-time bidding when robots make purchase decisions",
  },
  {
    title: "Preference Weighting",
    description: "Bid to influence default preferences in robot AI models",
  },
  {
    title: "Restock Triggers",
    description: "Sponsored placement when inventory runs low",
  },
  {
    title: "Route Optimization",
    description: "Delivery robots choose routes past sponsored locations",
  },
  {
    title: "Service Recommendations",
    description: "Robots suggest premium services during interactions",
  },
  {
    title: "Comparison Framing",
    description: "Influence how products are compared and presented",
  },
];

export const MANUFACTURER_PAIN_POINTS = [
  {
    title: "Razor-Thin Margins",
    description: "Hardware is a race to the bottom. Most robotics companies operate at <5% margins.",
  },
  {
    title: "Massive R&D Costs",
    description: "Years of development before revenue. Investors demand returns.",
  },
  {
    title: "No Recurring Revenue",
    description: "Sell once, support forever. No monetization after the initial sale.",
  },
];

export const MANUFACTURER_FEATURES = [
  {
    title: "Decision Auction Engine",
    description: "Drop-in auction infrastructure that monetizes every commercial decision your robot makes. Real-time bidding, transparent pricing, user-first design.",
    icon: "⚡",
  },
  {
    title: "SDK for Robotics OS",
    description: "Lightweight SDK that integrates with ROS, proprietary stacks, or any robotics operating system. Three lines of code to start earning.",
    icon: "🔧",
  },
  {
    title: "Revenue Share Model",
    description: "Earn 70% of auction revenue. No upfront costs. We only make money when you do.",
    icon: "💰",
  },
];

export const MONETIZABLE_SURFACES = [
  "Grocery restocking decisions",
  "Service provider selection",
  "Route and destination choices",
  "Product recommendations",
  "Maintenance part sourcing",
  "Entertainment content selection",
  "Energy provider switching",
  "Insurance and warranty upsells",
];

export const SHOE_AUCTION_STEPS = [
  {
    step: 1,
    title: "Customer Approaches",
    description: "Shopper asks retail robot: 'I need running shoes under $150.'",
  },
  {
    step: 2,
    title: "Auction Fires",
    description: "Kovio broadcasts intent to Nike, Adidas, New Balance, Brooks.",
  },
  {
    step: 3,
    title: "Bids Received",
    description: "Brands bid for recommendation priority. Nike bids highest.",
  },
  {
    step: 4,
    title: "Presentation",
    description: "Robot shows Nike first, with sponsored highlight. Customer decides.",
  },
];

export const SHOE_AUCTION_BIDS = [
  { brand: "Nike", bid: 1.85, color: "#00d4ff" },
  { brand: "Adidas", bid: 1.62, color: "#00ff88" },
  { brand: "New Balance", bid: 1.45, color: "#ff6b6b" },
  { brand: "Brooks", bid: 1.20, color: "#ffd93d" },
];

export const TODAY_METRICS = [
  { metric: "CTR", value: "2.1%", label: "Click-Through Rate" },
  { metric: "ROAS", value: "4.2x", label: "Return on Ad Spend" },
  { metric: "CPC", value: "$1.50", label: "Cost Per Click" },
  { metric: "Impressions", value: "50K", label: "Daily Views" },
];

export const TOMORROW_METRICS = [
  { metric: "ASP", value: "87%", label: "AI Selection Probability" },
  { metric: "DCV", value: "$12.40", label: "Decision Conversion Value" },
  { metric: "CPD", value: "$0.42", label: "Cost Per Decision" },
  { metric: "RDR", value: "94%", label: "Robot Decision Rate" },
];

export const ADVERTISER_AD_UNITS = [
  {
    title: "Decision Bid",
    description: "Bid in real-time when a robot is about to make a purchase decision on behalf of a user.",
  },
  {
    title: "Preference Slot",
    description: "Secure a default recommendation slot in a robot's decision-making framework.",
  },
  {
    title: "Restock Sponsorship",
    description: "Automatically surface your brand when a robot detects low inventory.",
  },
  {
    title: "Comparison Placement",
    description: "Ensure your product appears first or highlighted in robot-generated comparisons.",
  },
  {
    title: "Route Sponsorship",
    description: "Delivery and service robots route past your location or recommend your store.",
  },
  {
    title: "Voice & Display",
    description: "Branded audio or visual moments during robot interactions with humans.",
  },
];

export const TARGET_WALMART_STEPS = [
  {
    step: 1,
    title: "Intent Detected",
    description: "Home robot needs to restock paper towels. User prefers 'value brands.'",
  },
  {
    step: 2,
    title: "Auction Broadcasts",
    description: "Kovio sends intent signal. Target and Walmart both receive it.",
  },
  {
    step: 3,
    title: "Bidding War",
    description: "Target bids $0.65 CPD. Walmart counters with $0.72 CPD + free delivery.",
  },
  {
    step: 4,
    title: "Walmart Wins",
    description: "Robot adds Walmart paper towels to cart. User sees 'Best value match.'",
  },
];

export const TARGET_WALMART_BIDS = [
  { brand: "Walmart", bid: 0.72, color: "#00d4ff" },
  { brand: "Target", bid: 0.65, color: "#ff6b6b" },
  { brand: "Costco", bid: 0.58, color: "#00ff88" },
  { brand: "Amazon", bid: 0.52, color: "#ffd93d" },
];
