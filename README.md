# The website

`site/` is the whole website, plain HTML — no build step.

- `index.html` — the landing page (hero, features, how it works, FAQ) and the
  manifesto (same file, `#view-manifesto`).
- `download.html` — the tester's "start in 5 minutes" page, linked from the
  release notes and the Store listing.
- `privacy.html` — the privacy policy the Chrome Web Store requires.
- `RELEASE-NOTES.md` — the quick start the release workflow writes onto every
  GitHub release, beside the installers and the extension zip.
- `assets/` — the logo, the cat, and screenshots of the current build.

## Where it goes

`.github/workflows/site.yml` publishes this folder on every push that touches
it, to the `gh-pages` branch of the public `nhanho133/Viso-releases` repo.
GitHub Pages then serves it at **https://tryviso.me/**.

One-time setup in that repo: Settings → Pages → Source: *Deploy from a branch*
→ Branch: `gh-pages` / `/ (root)`. The first workflow run creates the branch.

### A custom domain

With the GitHub Student Developer Pack, Namecheap gives one free `.me` domain
for a year (and Name.com a `.live`/`.software`), and Pages serves it with HTTPS:

1. Register the domain, add DNS records: `A` → 185.199.108.153,
   185.199.109.153, 185.199.110.153, 185.199.111.153 and `CNAME www` →
   `nhanho133.github.io`.
2. Put the bare domain in `site/CNAME` (one line, e.g. `tryviso.me`) — the
   workflow ships that file with the site, so Pages keeps the domain across
   deploys.
3. Viso-releases → Settings → Pages → Custom domain → the same name →
   *Enforce HTTPS* once the certificate is issued (a few minutes).

### Vercel instead

Also fine, no workflow needed: import the `Viso` repo on vercel.com, set
*Root Directory* to `site`, Framework *Other*, leave build empty, deploy. It
gives `viso-xxx.vercel.app` and a custom domain the same way. The GitHub
Pages route is the one wired up here because it needs no new account.

## Before publishing for real

- `SUPPORT_EMAIL` in `download.html` and `privacy.html` — the address on the
  Store listing.
- `STORE_LINK` in `download.html` — the Unlisted extension's URL, known after
  the first upload to the Chrome Web Store dashboard.
- In `index.html`: `WAITLIST_ENDPOINT` (a Formspree/Tally URL — until then the
  form only keeps the address in the visitor's browser), the Discord / X /
  LinkedIn / Instagram links, and the countdown's target date.
