# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- GitHub Actions workflow for automatic Docker image publishing to GHCR
- Docker Pipeline documentation (`docs/DOCKER_PIPELINE.md`)
- VPS Deployment guide (`docs/VPS_DEPLOY.md`)
- Automated image tagging: version, major.minor, and latest
- Build cache optimization using GitHub Actions cache
- Automated tag verification to ensure tags come from master branch

### Changed
- Updated deployment documentation to reference new Docker pipeline

---

## [1.0.0] - 2026-01-21

### Added
- Initial release of Venture landing page
- Hero section with call to action
- Features section highlighting main benefits
- How it works section
- Responsive navigation menu
- Footer with links
- Docker support for production deployment
- Docker Compose configuration
- Nginx configuration for production
- Multi-stage Docker build (builder + production)
- Health check support in Docker container
- Non-root user execution for security

### Stack
- React 18
- Vite 5
- Tailwind CSS 3.4
- TypeScript
- Nginx (Alpine)
- Node.js 20 (Alpine)

---

## Version Format

The project uses the following version format for Docker tags:
- `vX.Y.Z` - Full semantic version (e.g., v1.0.0)
- `X.Y` - Major.minor version (e.g., 1.0)
- `latest` - Always points to the most recent release

Examples:
- Tag `v1.0.0` creates: `ghcr.io/usuario/venture:v1.0.0`, `ghcr.io/usuario/venture:1.0`, `ghcr.io/usuario/venture:latest`
- Tag `v2.1.3` creates: `ghcr.io/usuario/venture:v2.1.3`, `ghcr.io/usuario/venture:2.1`, `ghcr.io/usuario/venture:latest`
