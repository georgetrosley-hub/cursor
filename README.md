# Cursor Enterprise GTM — Account & Deal Tracking

Internal Cursor app for **Enterprise GTM Account Executives** to track accounts, deal flow, pipeline, and execution. Built to feel like a native Cursor internal product.

## What it does

- **Territory & War Room** — Single view of account thesis, first wedge, champion path, pilot design, competitive displacement, and expansion
- **Stakeholder Map** — Who to build with, where to expect friction, how to multi-thread the deal
- **Deal Plan** — Land, governance, exec alignment, commercial path, expansion
- **Deal Signals** — Hypotheses to pressure-test in discovery and execution
- **Field Kit** — Executive briefs, meeting prep, emails, objection talk tracks, security responses, battle cards (Cursor vs competitors)

Switch accounts (JPMorgan, Pfizer, Comcast, etc.) from the header to see how the capture plan, stakeholder map, deal plan, and field kit shift by account.

## Environment variables

Set these to enable chat and content generation:

- **ANTHROPIC_API_KEY** — API key for the AI layer (or add via the API Key button in the app)

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech stack

Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Recharts. Claude API for chat/generation. Prototype-grade, mostly client-side.

---

Cursor Internal · Enterprise GTM
