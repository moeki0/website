# Moeki Kawakami - Personal Website & Blog

This is my personal website and blog built with Astro.

## 🚀 Project Structure

```
.
├── public/           # Static assets
├── src/
│   ├── components/   # Astro/React/Vue/Svelte/Preact components
│   ├── content/      # Content collections (blog posts)
│   │   └── blog/    # Blog posts in Markdown
│   ├── layouts/      # Page layouts
│   ├── pages/        # Pages and routes
│   └── styles/       # Global styles
├── astro.config.mjs  # Astro configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## ✍️ Writing Blog Posts

Create new blog posts in `src/content/blog/`:

```markdown
---
title: 'My Blog Post Title'
description: 'A brief description of my post'
pubDate: 2025-01-30
---

Your content here...
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration is in `tailwind.config.js`.

## 📝 License

© 2025 Moeki Kawakami. All rights reserved.