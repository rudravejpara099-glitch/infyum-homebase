// All page copy as typed constants.
// Never hardcode strings inside components — always import from here.

export const NAV = {
  wordmark: "INFYUM",
  cta: "Book Your Free Conversion Audit",
} as const;

export const HERO = {
  eyebrow: "FREE CONVERSION AUDIT",
  headlineLine1: "Your Funnel Is Costing You",
  headlineLine2: "Calls You Already Earned",
  subheadline:
    "Most high-ticket coaches, consultants, and offer owners lose qualified calls before they ever get a reply. Not because their offer is weak — but because their funnel doesn't earn belief fast enough.",
  ctaPrimary: "Book Your Free Conversion Audit",
  ctaSecondary: "See What May Be Costing You Calls",
  micro: "Led by Harshil Bhadani · Backed by INFYUM's full execution team",
} as const;

export const PROBLEM = {
  sectionNum: "02",
  headline:
    "Most High-Ticket Brands Don't Need More Traffic. They Need A Funnel Buyers Actually Trust.",
  paragraphs: [
    "When a high-ticket offer underperforms, the instinct is always to do more — more ads, more content, more outreach. But the problem is rarely volume. It's trust architecture.",
    "Buyers don't convert because they're confused — not just about the offer, but about whether this person and this page deserve their time and attention. That confusion happens fast, often before the first scroll.",
  ],
  accentLine:
    "The solution isn't a redesign. It's a strategic conversion audit — built to find exactly where belief breaks down.",
} as const;

export const COSTS = {
  eyebrow: "THE COST OF INACTION",
  headline: "What A Weak Funnel Is Actually Costing You",
  subheadline: "Not just aesthetics. Actual momentum.",
  cards: [
    {
      num: "01",
      title: "Qualified leads bounce silently",
      body: "They arrived ready. Your funnel didn't earn the next click. They left without ever replying.",
    },
    {
      num: "02",
      title: "Your offer gets undersold",
      body: "The price feels unjustified. Not because the value isn't there — but because the page didn't build it.",
    },
    {
      num: "03",
      title: "Ad spend compounds the problem",
      body: "More traffic into a leaking funnel accelerates loss, not growth. Every campaign amplifies the gap.",
    },
    {
      num: "04",
      title: "You optimize the wrong variable",
      body: "Teams chase copy tweaks and button colors while the real issue — funnel trust — remains untouched.",
    },
  ],
  closingLine:
    "The offer is not always underperforming. Sometimes the funnel is simply underselling it.",
} as const;

export const WHY_HARSHIL = {
  sectionNum: "04",
  eyebrow: "THE DIAGNOSTIC LENS",
  headline: "Why Harshil Finds The Problem Before Your Analytics Do",
  body: [
    "Analytics tell you what happened. They don't tell you why a prospect read your page, felt uncertain, and quietly left.",
    "Harshil's approach starts with a different question: where does this funnel stop feeling credible? That's not a data question — it's a psychology question.",
  ],
  pullQuote: "More traffic will not fix a page that fails to build belief.",
  headshotNote: "HARSHIL BHADANI — Drop headshot image here (square crop recommended)",
} as const;

export const WHAT_GETS_FIXED = {
  eyebrow: "DEPTH OF THE WORK",
  headline: "What Gets Fixed Goes Deeper Than Design",
  intro:
    "A conversion audit isn't a design review. It's a strategic examination of every layer that either builds or breaks buyer conviction.",
  rows: [
    {
      label: "Messaging clarity",
      desc: "Whether the offer's core promise lands within 8 seconds of arriving on the page",
    },
    {
      label: "Trust sequencing",
      desc: "The order in which proof, authority, and specificity are introduced — and whether it mirrors how real buyers decide",
    },
    {
      label: "Friction points",
      desc: "Micro-moments where language gets vague, CTAs feel premature, or the page asks for commitment before earning it",
    },
    {
      label: "Objection coverage",
      desc: "Which hesitations are pre-answered in the copy and which are left sitting in the prospect's head unresolved",
    },
    {
      label: "Structural conversion logic",
      desc: "Whether the full page flows like a buying journey or reads like a brochure",
    },
  ],
  closingLine:
    "The real win is not a prettier funnel. It is a stronger buying experience.",
} as const;

export const RIGHT_FIT = {
  eyebrow: "WHO THIS IS FOR",
  headline:
    "The Clients Who Get The Most Out Of This Already Know Something Is Off",
  body: "This isn't for brands who are just getting started. It's for operators who have real traction, a real offer, and a real sense that their funnel isn't keeping pace with their credibility.",
  stateItems: [
    { left: "the offer", right: "has matured", highlight: false },
    { left: "the expertise", right: "is proven", highlight: false },
    { left: "the traffic", right: "is coming in", highlight: false },
    { left: "but the funnel", right: "still feels one level behind", highlight: true },
  ],
  callout:
    "If you've been telling yourself the funnel just needs more time — and deep down you know it's not a time problem — this audit is designed for exactly that moment.",
} as const;

export const AUDIT = {
  sectionNum: "07",
  eyebrow: "THE FREE AUDIT",
  headline: "What The Free Conversion Audit Actually Looks At",
  body: "In a focused 30-minute session, we walk through your funnel using a structured lens across five conversion dimensions:",
  lenses: ["Messaging", "Trust flow", "Friction", "Objections", "Conversion logic"],
  checklistTitle: "Inside the audit, we help you uncover",
  checkItems: [
    "Where your funnel loses trust and when",
    "Which objections are going unanswered",
    "What the page is asking for before it's earned",
    "One high-leverage change to test first",
  ],
  ctaCardSupport: "30-minute session · No obligation · Led by Harshil Bhadani",
  ctaCardBonus:
    "You'll leave with a clear picture of where your funnel is losing calls — and what to fix first.",
} as const;

export const FINAL_CTA = {
  headline: "Before You Push More Traffic, Make Sure The Funnel Deserves It",
  body: "Every dollar you spend on traffic runs through your funnel first. A weak funnel doesn't just underperform — it compounds every inefficiency upstream.",
  cta: "Book Your Free Conversion Audit",
  micro:
    "Led by Harshil Bhadani · Built with INFYUM · Designed to help strong offers stop underperforming online.",
} as const;

export const MODAL = {
  headline: "Book Your Free Conversion Audit",
  subheadline:
    "Tell us a bit about your business and we'll reach out to schedule your session.",
  fields: [
    { label: "Full Name", placeholder: "Your name", type: "text", name: "name" },
    { label: "Email Address", placeholder: "your@email.com", type: "email", name: "email" },
    { label: "Business Type", placeholder: "Coaching / Consulting / Agency / Other", type: "text", name: "businessType" },
    { label: "What feels off about your funnel? (optional)", placeholder: "Describe in a sentence or two...", type: "textarea", name: "message" },
  ],
  submit: "Book Your Free Conversion Audit",
  disclaimer: "No spam. No obligation. We respect your time and inbox.",
} as const;
