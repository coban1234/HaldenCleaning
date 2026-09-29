# Threshold Cleaning

Quote-first marketing site for residential, commercial and strata cleaning in Metro Vancouver. Built from Website Build Specification v1.0 (“Room by Room”) and Concept A (Quote-first ledger).

## Run

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Notes

- Brand name **Threshold** is the first naming candidate from the spec; domain and legal name are still a client decision.
- Flat rates are modelled stand-ins until operations confirms completion times.
- Photography is placeholder interiors until the commissioned set lands.
- Residential booking confirmation emails go through Resend. Copy `.env.example` to `.env` and add `RESEND_API_KEY`. Commercial and strata stay as walkthrough requests, confirmed by a manager.
