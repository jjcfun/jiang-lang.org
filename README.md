# Jiang Website

Documentation site for the Jiang programming language.

## Stack

- Astro
- Starlight
- Markdown/MDX
- Cloudflare Pages

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static output is written to `dist/`.

## Cloudflare Pages

Use these settings:

```text
Build command: npm run build
Build output directory: dist
Production branch: main
```

Configure the custom domain:

```text
jiang-lang.org
www.jiang-lang.org
```

Redirect `www.jiang-lang.org` to `jiang-lang.org` in Cloudflare once the domain is connected.
