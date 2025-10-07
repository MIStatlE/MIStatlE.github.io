# MIStatlE Lab — Quarto Website

A minimal Quarto website ready for GitHub Pages at **https://mistatle.github.io**.

## Develop

```bash
quarto preview
```

## Deploy (auto)

Push to `main`. GitHub Actions renders and publishes to the `gh-pages` branch.

## Structure

- `_quarto.yml` — site config (navbar, theme, links)
- `index.qmd` — home
- `about.qmd` — about
- `posts/` — posts and listing (with RSS)
- `.github/workflows/quarto-publish.yml` — CI publish
