# Abono ONG — abono.ong

Static website for Fundación Abono, migrated from Squarespace to GitHub Pages.

## Pages

| File | URL | Description |
|------|-----|-------------|
| `index.html` | `/` | Home |
| `about.html` | `/about` | Quiénes somos |
| `taller-ia.html` | `/taller-ia` | Taller IA |
| `join.html` | `/join` | RedAbono |

## Adding Images

Place photos in the `img/` folder. Recommended files:

- `img/hero-home.jpg` — Hero image on homepage (landscape, people)
- `img/seb.jpg` — Sebastián's headshot
- `img/anto.jpg` — Antonella's headshot
- `img/santi.jpg` — Santiago's headshot
- `img/fer.jpg` — Fernando's headshot

The `taller-photo.webp` is already in the root — it's used on the home page and taller-ia page.

To wire up team photos, replace the initials placeholders in `about.html` with:
```html
<div class="team-photo">
  <img src="img/seb.jpg" alt="Sebastián López Betancurt"/>
</div>
```

## Deploying

### First-time setup

1. Create a new GitHub repo called `abono-ong` (or `abono.ong`)
2. Push this code:
```bash
git init
git add .
git commit -m "Initial commit — migrated from Squarespace"
git remote add origin https://github.com/YOUR_USERNAME/abono-ong.git
git push -u origin main
```

3. In GitHub → Settings → Pages → Source: select **GitHub Actions**
4. The workflow runs automatically on every push to `main`

### Custom domain (abono.ong)

1. In your DNS settings, add:
   - `A` record → `185.199.108.153` (and 109, 110, 111)
   - OR `CNAME` record: `www` → `YOUR_USERNAME.github.io`
2. In GitHub → Settings → Pages → Custom domain: enter `abono.ong`
3. Check "Enforce HTTPS"

## External links

- **PayPal donations**: `https://www.paypal.com/donate/?hosted_button_id=HG58KEAJ6E5TA`
- **RedAbono form**: `https://docs.google.com/forms/d/e/1FAIpQLSci0a6q2ujmFryTeGCMd-kiX7fKdyUNOEJ9fbn3FL68BCB4Ng/viewform`
- **Email**: abono.ong.uy@gmail.com
