# Ada-54 Data Showcase

Scaffold for ADA-54: Design and build data showcase website.

## How to run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

Pages:
- `/` - Landing page with feature highlights
- `/dashboard` - Analytics dashboard with sample Bar chart

API:
- `/api/data` - Sample JSON endpoint returning metrics

## Tech stack

- Next.js 14
- React 18
- Tailwind CSS
- Chart.js + react-chartjs-2

## Deployment (Vercel)

To deploy on Vercel:

1. Create a GitHub repository and push this project:
   ```bash
   git remote add origin https://github.com/<org>/ada-54-site.git
   git push -u origin master
   ```
2. Import the repo in Vercel (https://vercel.com/new)
3. Use default Next.js preset
4. Deploy — Vercel will provide a preview URL

Alternatively, run `npx vercel` in this directory for a one-off preview.

## Next steps

- Add more chart types and data sources
- Implement data filtering and date range selection
- Add CSV export functionality
- Configure CI/CD for automatic previews on PRs
