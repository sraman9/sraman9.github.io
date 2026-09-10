# Portfolio — Sid Raman

Next.js site, statically exported, deployed to GitHub Pages.

## Editing content

All copy lives in `content/site.js`. Search for `TODO` — those are the
placeholders to fill in. You should not need to touch any other file to
change what the site says.

Drop your resume at `public/resume.pdf`.

## Running it locally

Requires Node 20+.

```
npm install
npm run dev
```

Then open http://localhost:3000

## Deploying

1. Create a GitHub repo named `sraman9.github.io` (this gives you the URL
   `https://sraman9.github.io` with no subpath).
2. Push this folder to it on the `main` branch.
3. In the repo: Settings → Pages → Build and deployment → Source → **GitHub Actions**.
4. Every push to `main` rebuilds and redeploys automatically.

If you ever use a repo name other than `sraman9.github.io`, add
`basePath: '/repo-name'` to `next.config.mjs` or every asset will 404.

## Working across two machines

This repo is the source of truth, not either laptop. On the MacBook:

```
git clone https://github.com/sraman9/sraman9.github.io.git
```

Commit and push from whichever machine you're on; pull before you start.
