# Portfolio — Nguyen Chi Thong

Static portfolio site (plain HTML + CSS, no build step), deployed with GitHub Pages.

## Edit

- `index.html` — English page (hero, projects, about, contact). Each section is marked with a comment.
- `vi/index.html` — Vietnamese page, same structure. Keep both in sync when editing content.
- `style.css` — colors live in `:root` at the top (light + dark mode).
- `main.js` — footer year + light/dark toggle (shared by both pages).
- `assets/` — project preview images (1200×630).

**Add a project:** copy one `<article class="card">` block in both `index.html` and `vi/index.html`, drop its image into `assets/`, update the text and links.

## Preview locally

```bash
npx serve .
# or
python -m http.server
```

Push to `main` and GitHub Pages redeploys automatically.
