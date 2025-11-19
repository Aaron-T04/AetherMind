# Template Outputs Guide

This document explains what each workflow template should output and how the fallback system ensures valid outputs even if APIs fail.

## 1. Research → Analysis → Summary

**Input:** `research_topic: "Latest AI trends in 2025"`

**Expected Flow:**
1. **Firecrawl Search** → Returns web search results with `web` array containing articles
2. **Gemini Analysis** → Analyzes search results and outputs structured analysis
3. **AI/ML API Summary** → Creates executive summary from analysis
4. **Transform to JSON** → Converts summary to structured JSON

**Final Output (JSON):**
```json
{
  "researchTopic": "Latest AI trends in 2025",
  "timestamp": "2025-01-18T12:00:00.000Z",
  "summary": "Executive Summary: Analysis Results...",
  "workflow": "AetherMind Research → Analysis → Summary",
  "metadata": {
    "researchAgent": "Web Research",
    "analysisAgent": "Gemini 1.5 Flash",
    "summaryAgent": "Llama 3.1 70B (AI/ML API)",
    "executionTime": "2025-01-18T12:00:00.000Z"
  }
}
```

**Fallback Data:**
- **Firecrawl:** Returns 5 realistic AI trends articles from TechCrunch, McKinsey, VentureBeat, Gartner, Forbes
- **Gemini Analysis:** Returns structured analysis with 4 sections (Key Findings, Trends, Statistics, Implications)
- **AI/ML API Summary:** Returns executive summary format
- **Transform:** Always produces valid JSON structure

---

## 2. Yahoo Finance Stock Report

**Input:** `ticker: "NVDA"`

**Expected Flow:**
1. **Firecrawl Search** → Searches Yahoo Finance for stock ticker
2. **Gemini Analysis** → Extracts price, metrics, news from search results
3. **AI/ML API Report** → Writes professional stock analysis report

**Final Output (Text Report):**
```
# Stock Analysis Report: NVDA

## Executive Summary
NVDA demonstrates strong market performance...

## Key Metrics
| Metric | Value |
|--------|-------|
| Current Price | $150.25 |
| Daily Change | +$2.50 (+1.69%) |
...

## Performance Analysis
...

## Recent News Summary
...

## Investment Recommendation
BUY - ...
```

**Fallback Data:**
- **Firecrawl:** Returns Yahoo Finance search results with stock data (price, market cap, P/E, 52-week range)
- **Gemini Analysis:** Returns structured analysis with stock metrics extracted
- **AI/ML API Report:** Returns professional stock report with tables, analysis, and recommendation

---

## 3. Multi-Company Stock Analysis (Loop Demo)

**Input:** `companies: ["NVDA", "AAPL", "MSFT"]`

**Expected Flow:**
1. **Loop Start** → Iterates through each company
2. **Get Ticker** → Extracts ticker symbol (Gemini)
3. **Firecrawl Search** → Searches Yahoo Finance for each ticker
4. **Gemini Analysis** → Analyzes each company's data
5. **Loop End** → Collects all analyses
6. **AI/ML API Summary** → Creates comparative summary report

**Final Output (Text Report):**
```
# Multi-Company Stock Analysis Summary

## Overview
Analysis of 3 companies: NVDA, AAPL, MSFT

## Company 1: NVDA
- Current Price: $150.25
- Analysis: Strong performance...
...

## Company 2: AAPL
...

## Comparative Analysis
...
```

**Fallback Data:**
- **Get Ticker:** Returns ticker symbol from company name
- **Firecrawl:** Returns stock data for each ticker (same format as Yahoo Finance template)
- **Gemini Analysis:** Returns analysis for each company
- **AI/ML API Summary:** Returns comparative summary of all companies

---

## 4. Amazon Product Research

**Input:** `product: "wireless mouse"`

**Expected Flow:**
1. **Firecrawl Search** → Searches Amazon for products
2. **Gemini Extract** → Extracts product data (price, rating, features, reviews)
3. **AI/ML API Recommend** → Analyzes and provides buying recommendation

**Final Output (Text Recommendation):**
```
## Product Overview
wireless mouse - Multiple high-quality options available...

## Pros & Cons
**Pros:**
- High customer satisfaction (4.2-4.7 star ratings)
- Wireless connectivity...
...

## Value Assessment
...

## Recommendation
BUY - The Logitech MX Master 3S is recommended...
```

**Fallback Data:**
- **Firecrawl:** Returns Amazon product search results with 3 products (Logitech, Razer, Apple) with prices, ratings, reviews
- **Gemini Extract:** Returns extracted product data with features and review summaries
- **AI/ML API Recommend:** Returns comprehensive buying recommendation with pros/cons, value assessment, and specific product recommendations

---

## Fallback System Details

### When Fallback Activates
- Firecrawl API fails (rate limit, network error, invalid key)
- Gemini API fails (rate limit, network error, invalid key)
- AI/ML API fails (rate limit, network error, invalid key)
- Any API returns error status

### Fallback Behavior
1. **Detects failure** → Logs warning: `⚠️ Using fallback mock data for demo`
2. **Uses context-aware data** → Generates realistic mock data based on:
   - Node name (e.g., "gemini-analysis", "aimlapi-summary")
   - Input variables (e.g., ticker, product, research_topic)
   - Template type (stock, product, research)
3. **Maintains format** → Output matches expected format (JSON, text, structured)
4. **Marks as fallback** → Adds `_fallback: true` flag to output

### Fallback Data Quality
- **Realistic values:** Uses plausible numbers (prices, ratings, metrics)
- **Proper structure:** Matches actual API response formats
- **Context-aware:** Adapts to input (ticker symbols, product names, topics)
- **Complete data:** Includes all expected fields and sections

### Enabling/Disabling Fallback
- **Enabled by default** in demo mode (`DEMO_MODE !== 'false'`)
- **Force enable:** Set `USE_FALLBACK_DATA=true` in `.env.local`
- **Disable:** Set `DEMO_MODE=false` and `USE_FALLBACK_DATA=false`

---

## Output Validation

All templates produce valid outputs that:
- ✅ Match expected format (JSON or structured text)
- ✅ Include all required fields
- ✅ Are properly formatted and readable
- ✅ Work with downstream nodes in the workflow
- ✅ Can be displayed in the UI without errors

The fallback system ensures your demo will work even if:
- API keys are exhausted
- Rate limits are hit
- Network connectivity is poor
- APIs are temporarily down

