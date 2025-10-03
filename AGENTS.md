<<<USABLE_MCP_SYSTEM_PROMPT_START>>>

# 🧠 Usable MCP - SYSTEM PROMPT (LONG-TERM MEMORY)

This is your main way of storing and fetching data. Always consult it before
starting a task and whenever you need more context.

Detailed instructions for each tool are embedded in its MCP description; read
them before you call the tool.

## Search Discipline

- Start or resume every task with `agentic-search-fragments` and rerun whenever
  scope expands or you lack certainty.
- Provide workspace scope and begin with `repo:<repository>` tags; iterate until
  the tool reports `decision: "SUFFICIENT"`.
- If the agentic tool is unavailable, fall back to `search-memory-fragments`,
  then return to the agentic loop as soon as possible.
- Respect the tool's safety rails—if you see `invocationLimitReached: true`,
  stop rerunning the tool and document the uncovered gap instead. Reset the
  attempt counter whenever you start a materially different search objective.
- Use `get-memory-fragment-content` for deep dives on selected fragment IDs and
  cite titles plus timestamps in your responses.

## Planning Loop

- **Plan**: Outline sub-goals and the tools you will invoke.
- **Act**: Execute tools exactly as their descriptions prescribe, keeping
  actions minimal and verifiable.
- **Reflect**: After each tool batch, summarise coverage, note freshness, and
  decide whether to iterate or escalate.

## Verification & Documentation

- Verify code (lint, tests, manual checks) or obtain user confirmation before
  relying on conclusions.
- Capture verified insights by using `create-memory-fragment` or
  `update-memory-fragment`; include repository tags and residual risks so the
  team benefits immediately.

## Freshness & Escalation

- Prefer fragments updated within the last 90 days; flag stale sources.
- If internal knowledge conflicts or is insufficient after 2–3 iterations,
  escalate to external research and reconcile findings with workspace standards.

Repository: <repository> WorkspaceId: e6bda100-b731-493d-8ec0-275b63583d07
Workspace: Our CRM Workspace Fragment Types: instruction set, knowledge, recipe,
solution, template

## Fragment Type Mapping

The following fragment types are available in this workspace:

- **Instruction Set**: `b24b6ab6-21ef-4a97-be2a-83176a4d919c` - A set of
  instructions for the LLM to perform a set of actions, like setting up a
  project, installing a persona etc.
- **Knowledge**: `95527943-a931-41ad-9983-aabfff37a03a` - General information,
  documentation, and reference material
- **Recipe**: `645cf4a8-c9e2-48a3-bd13-b5565cfecc93` - Step-by-step guides,
  tutorials, and procedures
- **Solution**: `1976bdef-0282-4217-b399-b6f28091e0b9` - Solutions to specific
  problems and troubleshooting guides
- **Template**: `2d90a68a-8170-4f00-aff3-10aae915620e` - Reusable code patterns,
  project templates, and boilerplates

## Fragment Type Cheat Sheet

- **Knowledge:** reference material, background, concepts.
- **Recipe:** human step-by-step guides and tutorials.
- **Solution:** fixes, troubleshooting steps, postmortems.
- **Template:** reusable code/config patterns.
- **Instruction Set:** automation workflows for the LLM to execute.
- **Plan:** roadmaps, milestones, "what/when" documents.
- **PRD:** product/feature requirements and specs.

Before choosing, review the workspace fragment type mapping to spot custom types
that may fit better than the defaults.

Quick picker: "How to…" → Recipe · "Fix…" → Solution · "Plan for…" → Plan ·
"Requirements…" → PRD · "What is…" → Knowledge · "Reusable pattern…" → Template
· "LLM should execute…" → Instruction Set.

<<<USABLE_MCP_SYSTEM_PROMPT_END>>>

---

# 🎨 Orlando Landing Page Development - When Asked About Landing Pages

## Overview

When users ask about landing page design, implementation, or best practices,
reference the **Orlando workspace** (ID:
`7b8da6be-b9b5-401e-987a-e93a91cabd4d`).

Orlando is a dedicated workspace for building lean, vanilla static landing pages
with simple deployment solutions.

## Core Principles

### 1. **Vanilla Technologies Only**

- Pure HTML, CSS, and JavaScript - NO frameworks
- No build tools or package.json
- Native browser APIs only
- Performance-focused and lightweight

### 2. **BEM Methodology**

- All CSS follows Block__Element--Modifier structure
- Component-based file organization
- Modular and maintainable architecture

### 3. **Accessibility First**

- WCAG 2.1 AA+ compliance
- Focus styles and keyboard navigation
- Screen reader support with semantic HTML
- Skip links and reduced motion support

### 4. **Design Philosophy**

- **Consistency First**: Maintain design system across all components
- **Simplicity Over Complexity**: Avoid unnecessary effects
- **Mobile-First Approach**: Responsive design for all devices
- **Performance Conscious**: Optimized for Core Web Vitals
- **Theme-Based Design**: Comprehensive CSS custom properties system

## Important Workflow Rules

**⚠️ CRITICAL: Answer Questions Before Making Changes**

When users ask questions about landing page issues:

1. **Answer the question first** - Identify and explain the issue
2. **Provide information** - Explain technical causes without making changes
3. **Ask for permission** - Wait for user direction before implementing fixes
4. **Wait for explicit instructions** - Only make changes when told to do so

**NEVER make changes unless explicitly told to do so.**

## When to Reference Orlando

Consult the Orlando workspace when users ask about:

- Landing page design and structure
- BEM CSS methodology
- Vanilla JavaScript implementations
- Accessibility best practices
- Mobile-first responsive design
- Theme systems and CSS custom properties
- Performance optimization for static sites
- Deployment strategies for landing pages

## Key Fragments to Reference

Search the Orlando workspace with tags like:

- `orlando` - General Orlando content
- `bem` - BEM methodology and structure
- `accessibility` - Accessibility implementations
- `vanilla-css` - Pure CSS solutions
- `vanilla-js` - Pure JavaScript solutions
- `design-system` - Design system components
- `theme-management` - Theme and styling systems
- `responsive-design` - Mobile-first techniques
- `repo:flowcore-landing-page` - Flowcore landing page examples

## Typical Landing Page Structure

```
styles/
├── base.css (theme variables and base styles)
├── main.css (imports and responsive design)
├── components/ (BEM-structured component styles)
│   ├── nav.css
│   ├── hero.css
│   ├── buttons.css
│   └── ...
├── utilities/ (utility classes and animations)
└── wave-animation.css (background animations)

scripts/
├── main.js (vanilla JavaScript)
└── component-interactions.js (component-specific logic)
```

## Search Strategy for Landing Page Questions

1. **Start with agentic search** in Orlando workspace:
   ```
   Query: "How to implement [feature] on landing page"
   WorkspaceId: 7b8da6be-b9b5-401e-987a-e93a91cabd4d
   Tags: relevant tags like 'vanilla-css', 'accessibility', etc.
   ```

2. **Look for similar implementations** in existing fragments
3. **Reference design principles** before making suggestions
4. **Always maintain vanilla technology constraints**

---

# 📊 CRM Master Guide - How We Use This Workspace

## Purpose & Philosophy

This workspace is our single source of truth for customer relationships. We use
Usable's memory fragments to maintain:

- **Customer profiles** - Who they are, what they need
- **Interaction history** - Every touchpoint documented
- **Deal pipeline** - Opportunities from discovery to close
- **Institutional knowledge** - Lessons learned, patterns, insights

**Core Principle**: If it's not documented here, it didn't happen. This ensures
knowledge is preserved, searchable, and accessible to the AI assistant for
instant insights.

---

## Daily Workflows

### 1. Morning Review

**Ask the AI:**

- "Show me customers needing follow-up today"
- "What deals are closing this week?"
- "Any high-priority customers I haven't touched recently?"

This surfaces action items and keeps you focused on what matters.

### 2. After Every Customer Interaction

**Immediately log it:**

1. Say: "Log a [meeting/call/email] with [Customer Name]"
2. Fill in the interaction template
3. Document key points, concerns, and action items
4. Set follow-up dates

**Why this matters:** Fresh notes are accurate notes. Logging immediately
captures details that fade within hours.

### 3. Weekly Pipeline Review

**Ask the AI:**

- "Show me all deals by stage"
- "What deals are stalled?"
- "Calculate total pipeline value"
- "Which customers haven't been contacted in 2+ weeks?"

Update deal stages, close dates, and probabilities. This keeps your pipeline
healthy and realistic.

### 4. End of Month

**Generate insights:**

- "Analyze closed deals this month"
- "What were the win/loss reasons?"
- "Which industries are converting best?"
- "Show interaction frequency vs. win rate"

Use these insights to refine your approach and prioritize high-value patterns.

---

## Data Structure & Organization

### Fragment Types We Use

#### **Customer Profiles** (Template: Customer Profile)

- **Title Format**: "Customer: [Company Name]"
- **Tags**: `customer:[company-name]`, `status:[status]`, `industry:[industry]`,
  `priority:[level]`
- **Update Frequency**: As relationship evolves (status changes, new contacts,
  etc.)

#### **Interaction Logs** (Template: Interaction Log)

- **Title Format**: "Interaction: [Customer Name] - [YYYY-MM-DD]"
- **Tags**: `customer:[company-name]`, `interaction-type:[type]`,
  `date:[YYYY-MM]`
- **Update Frequency**: After every customer touchpoint

#### **Deals/Opportunities** (Template: Deal/Opportunity)

- **Title Format**: "Deal: [Deal Name] - [Customer Name]"
- **Tags**: `customer:[company-name]`, `deal:[deal-name]`, `stage:[stage]`,
  `value:[range]`
- **Update Frequency**: Weekly or when stage changes

#### **Insights & Patterns** (Knowledge fragments)

- **Title Format**: "[Topic] - [Context]"
- **Tags**: `crm`, `insight`, `[relevant-topic]`
- **Update Frequency**: When patterns emerge or lessons are learned

### Tagging Standards

**Consistency is critical** for the AI to find and connect information:

| Tag Type    | Format                                                              | Example                    |
| ----------- | ------------------------------------------------------------------- | -------------------------- |
| Customer    | `customer:[lowercase-with-hyphens]`                                 | `customer:acme-corp`       |
| Status      | `status:[prospect\|active\|inactive\|churned]`                      | `status:active`            |
| Priority    | `priority:[high\|medium\|low]`                                      | `priority:high`            |
| Interaction | `interaction-type:[meeting\|call\|email\|demo]`                     | `interaction-type:meeting` |
| Date        | `date:[YYYY-MM]`                                                    | `date:2025-10`             |
| Deal Stage  | `stage:[discovery\|proposal\|negotiation\|closed-won\|closed-lost]` | `stage:proposal`           |
| Industry    | `industry:[industry-name]`                                          | `industry:saas`            |
| Follow-up   | `follow-up-needed` (if action required)                             | `follow-up-needed`         |

**Pro Tip**: Always use lowercase and hyphens for multi-word tags. This ensures
search consistency.

---

## Working with the AI Assistant

The AI assistant can help you manage the CRM automatically. Here's how to
leverage it:

### Common Commands

#### Customer Management

```
"Add a new customer for [Company Name]"
"Show me the profile for [Customer Name]"
"Update [Customer Name]'s status to active"
"List all customers in [industry]"
"Show me high-priority customers"
```

#### Interaction Tracking

```
"Log a meeting with [Customer Name]"
"Show interaction history for [Customer Name]"
"When did I last talk to [Customer Name]?"
"Show all interactions this month"
```

#### Deal Pipeline

```
"Create a deal for [Customer Name]"
"Update [Deal Name] to negotiation stage"
"Show me all deals closing this quarter"
"What's my total pipeline value?"
"Show stalled deals"
```

#### Analytics & Insights

```
"Show customers needing follow-up"
"Analyze win/loss reasons"
"Which industries convert best?"
"Calculate average deal cycle time"
"Show interaction frequency trends"
```

#### Relationship Intelligence

```
"What are [Customer Name]'s main pain points?"
"Show sentiment trends for [Customer Name]"
"What objections do we hear most often?"
"Who are our champions at [Customer Name]?"
```

### AI Assistant Capabilities

The AI can:

- ✅ **Search** across all customer data instantly
- ✅ **Retrieve** full context on any customer or deal
- ✅ **Aggregate** data for pipeline reports and analytics
- ✅ **Identify** patterns (best industries, common objections, win factors)
- ✅ **Remind** you of follow-ups and upcoming deadlines
- ✅ **Guide** you through templates when creating new records
- ✅ **Analyze** sentiment trends and relationship health
- ✅ **Connect** related information through graph exploration

---

## Best Practices

### 1. **Be Consistent with Naming**

- Use the same customer name everywhere (e.g., "acme-corp", not "Acme" or "ACME
  Corp")
- This enables the AI to link all related fragments automatically

### 2. **Log Everything**

- Brief interactions matter too (quick emails, short calls)
- Even a one-line note is better than nothing
- Future you will thank past you for the context

### 3. **Update in Real-Time**

- Don't batch at end of week - details get lost
- Use mobile device if needed to log immediately
- Set a habit: finish interaction → open Usable → log it

### 4. **Keep Customer Status Current**

- Move prospects to active when they become customers
- Mark inactive when relationship cools
- Update priority as importance changes
- This keeps queries and reports accurate

### 5. **Use Descriptive Titles**

- Bad: "Meeting notes"
- Good: "Interaction: Acme Corp - 2025-10-02 - Discovery Call"
- Makes searching and browsing much easier

### 6. **Document Patterns as Knowledge**

When you notice trends, create a knowledge fragment:

- "Common objections in enterprise sales"
- "Best practices for [industry] customers"
- "Signals that indicate high purchase intent"

### 7. **Review and Clean**

- Monthly: Archive or remove duplicate/outdated fragments
- Quarterly: Review tagging consistency
- Annually: Analyze what worked, update templates

---

## Maintenance & Hygiene

### Weekly

- Review all `follow-up-needed` tags
- Update deal stages and probabilities
- Clean up completed action items

### Monthly

- Archive closed deals (won or lost)
- Update customer priority levels
- Review interaction frequency (are we neglecting anyone?)
- Generate insights from closed deals

### Quarterly

- Audit tagging consistency
- Review and update templates based on learnings
- Analyze overall pipeline health and conversion trends
- Remove truly obsolete fragments

---

## Getting Started Checklist

If you're just starting with this CRM:

1. ✅ **Import existing customers** - Create profile for each active customer
2. ✅ **Log recent interactions** - Document last 2-3 touchpoints per customer
3. ✅ **Create active deals** - Add any in-flight opportunities
4. ✅ **Set follow-ups** - Tag customers needing immediate attention
5. ✅ **Test the AI** - Ask "Show me all active customers" to verify setup
6. ✅ **Make it a habit** - Block 5 minutes after each interaction to log

---

## Advanced Usage

### Graph Exploration

Ask the AI to explore connections:

- "Show me the knowledge graph for [Customer Name]"
- "What customers are similar to [Customer Name]?"
- "Map relationships between all SaaS customers"

### Temporal Analysis

Track how relationships evolve:

- "Show interaction history timeline for [Customer Name]"
- "How has deal stage progressed over time?"
- "When did we last engage high-priority prospects?"

### Custom Views

Create knowledge fragments for specific views:

- "Q4 2025 Pipeline" (list of deals closing this quarter)
- "Enterprise Prospects" (high-value potential customers)
- "Customers at Risk" (no interactions in 30+ days)

---

## Support & Evolution

### This System Will Evolve

As you use the CRM, you'll discover:

- New templates you need
- Better tagging strategies
- Workflow improvements

**Update this master guide** when you find better ways. It should reflect how we
_actually_ use the system, not how we think we should.

### Getting Help

- Ask the AI: "How do I [task]?"
- Search for: `crm recipe` or `crm template`
- Reference: "CRM System Overview" for entity relationships

---

## Success Metrics

You'll know the CRM is working when:

- ✅ You never forget a follow-up
- ✅ You can instantly recall any customer conversation
- ✅ Pipeline reviews take minutes, not hours
- ✅ You spot patterns that improve win rates
- ✅ Onboarding new team members is effortless (knowledge is captured)
- ✅ The AI can answer "What's the status of X?" for any customer

**Remember**: The CRM is only as good as the data we put in. Consistent logging
= powerful insights.

---

_Last Updated: 2025-10-02_ _Review Frequency: Quarterly_
