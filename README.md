# Portfolio — Nguyen Chi Thong

Static portfolio site (plain HTML + CSS, no build step), deployed with GitHub Pages.

## Edit

- `index.html` — all content (hero, projects, about, contact). Each section is marked with a comment.
- `style.css` — colors live in `:root` at the top (light + dark mode).
- `assets/` — project preview images (1200×630).

**Add a project:** copy one `<article class="card">` block in `index.html`, drop its image into `assets/`, update the text and links.

## Preview locally

```bash
npx serve .
# or
python -m http.server
```

Push to `main` and GitHub Pages redeploys automatically.
