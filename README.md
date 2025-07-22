# Flipkart-like E-commerce Microfrontend Monorepo

## Overview
This project is a modular, microfrontend-based e-commerce platform inspired by Flipkart. It uses React for all frontends, a dummy JSON backend, and Docker for containerization at every level.

## Structure
```
ecom/
│
├── docker-compose.yml         # Orchestrates all services
├── .env                      # Shared environment variables
│
├── shell/                    # React shell app (hosts microfrontends)
│   └── Dockerfile
│
├── microfrontends/
│   ├── catalog/              # Product catalog
│   │   └── Dockerfile
│   ├── product/              # Product details
│   │   └── Dockerfile
│   ├── cart/                 # Shopping cart
│   │   └── Dockerfile
│   ├── wishlist/             # Wishlist
│   │   └── Dockerfile
│   ├── user/                 # User profile, orders
│   │   └── Dockerfile
│   ├── admin/                # Super admin dashboard
│   │   └── Dockerfile
│   ├── seller/               # Seller dashboard
│   │   └── Dockerfile
│   └── ...                   # More modules as needed
│
├── shared/                   # Common React components, hooks, utils
│
├── backend/                  # Dummy JSON backend
│   ├── Dockerfile
│   └── data/                 # All sample JSON files
│
└── tests/                    # Jest/Cypress E2E tests
    └── Dockerfile
```

## Docker Usage
- **Each app/module** has its own Dockerfile for independent builds.
- **docker-compose.yml** at the root orchestrates all services for local development and deployment.
- **Backend** uses a simple static server (e.g., json-server) to serve JSON as API endpoints.

## Getting Started
1. Clone the repo
2. Run `docker-compose up --build`
3. Access the shell at `http://localhost:3000` (default)

## Extending
- Add new microfrontends in `microfrontends/` with their own Dockerfile.
- Add new JSON data in `backend/data/`.
- Update `docker-compose.yml` to include new services.

---

This README will be updated as modules are implemented. 