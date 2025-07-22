# Ecom Monorepo Setup Guide

This guide will help you set up and run the Ecom monorepo (backend and all microfrontends) on your local machine.

---

## 1. Clone the Repository

If you haven’t already:

```bash
git clone <your-repo-url>
cd commerce/Ecom
```

---

## 2. Install Dependencies for All Apps

From the `Ecom` directory, run:

```bash
find . -name "package.json" -not -path "*/node_modules/*" -execdir npm install \;
```

This will install all dependencies for backend and every microfrontend.

---

## 3. (Optional) Build All Apps

If your apps require a build step (e.g., React/Vite apps):

```bash
find . -name "package.json" -not -path "*/node_modules/*" -execdir npm run build \;
```

---

## 4. Start the Backend

Navigate to the backend directory and start the server:

```bash
cd ecom/backend
npm start
```

Or, if you use a different command (like `npm run dev`), use that instead.

---

## 5. Start Microfrontends

Each microfrontend (admin, cart, catalog, etc.) can be started individually. For example:

```bash
cd ../../ecom/microfrontends/catalog
npm run dev
```

Repeat for each microfrontend you want to run (in separate terminal tabs/windows).

---

## 6. (Optional) Use Docker Compose

If you want to run everything with Docker Compose (if configured), from the `Ecom/ecom` directory:

```bash
docker-compose up --build
```

This will start all services defined in your `docker-compose.yml`.

---

## 7. Access the Apps

- **Backend API:** Usually at `http://localhost:PORT` (check your backend config)
- **Microfrontends:** Each will run on its own port, e.g., `http://localhost:5173` for Vite apps (check the output in your terminal)

---

## Summary Table

| Step                | Command                                                                 |
|---------------------|-------------------------------------------------------------------------|
| Install all         | `find . -name "package.json" -not -path "*/node_modules/*" -execdir npm install \;` |
| Build all           | `find . -name "package.json" -not -path "*/node_modules/*" -execdir npm run build \;` |
| Start backend       | `cd ecom/backend && npm start`                                          |
| Start microfrontend | `cd ecom/microfrontends/<app> && npm run dev`                           |
| Docker Compose      | `cd ecom && docker-compose up --build`                                  |

---

**Need help?**
- For environment variables, check for `.env.example` files in each app.
- For troubleshooting, check the terminal output for errors.
- If you need to automate running all dev servers, ask for a script! 