# personal-page

Personal site for Jonas Beltoft. Plain static HTML/CSS/JS, no build step.

```
public/
  index.html    markup
  styles.css    all styling (theme tokens at the top)
  script.js     theme toggle + "Student work" expand/collapse
  assets/       images
.do/app.yaml    DigitalOcean App Platform spec
```

## Run locally

```bash
python3 -m http.server 8000 --directory public
```

Then open http://localhost:8000.

## Deploy (DigitalOcean App Platform)

The site is served as a static site from `public/`. Either:

- `doctl apps create --spec .do/app.yaml`, or
- Control panel → Create App → GitHub → `jonasbeltoft/personal-page`, branch `main`.
  Choose **Static Site** as the resource type and set the output directory to `public`.

Pushes to `main` redeploy automatically.
