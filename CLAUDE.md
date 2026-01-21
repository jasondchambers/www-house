# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Svelte 4 application showcasing before/after photos of a house remodeling project. The live site is [stratfordremodel.com](https://stratfordremodel.com).

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Start development server (Vite)
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build locally
```

### Docker

```bash
docker build -t www-house:latest .
docker run -p 8080:80 www-house:latest
```

## Architecture

The application uses a simple component structure:

- `src/main.js` - Entry point, mounts App to `#app`
- `src/App.svelte` - Root component containing a list of Beforeafter components
- `src/beforeafter.svelte` - Interactive image comparison slider component with CSS custom properties for position control
- `src/lazyimage.js` - Svelte action for lazy loading images using viewport detection
- `src/useViewportAction.js` - Svelte action wrapping IntersectionObserver for viewport enter/exit events

### Key Pattern: Svelte Actions

The codebase uses Svelte actions (`use:directive`) for DOM manipulation:
- `lazyimage` action defers image loading until the element enters viewport
- `viewport` action dispatches custom `enterViewport`/`exitViewport` events via IntersectionObserver

### Build & Deploy

- Vite builds static output to `dist/`
- Multi-stage Dockerfile builds the app and serves via nginx:alpine
- GitHub Actions workflow publishes container images to GHCR and Docker Hub
