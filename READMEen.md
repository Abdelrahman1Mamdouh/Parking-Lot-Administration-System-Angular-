# Gestione Parco Auto — Parking Lot Administration System (Angular)

## Project Overview
A professional **Angular 16** web application designed for **parking lot administrators** to efficiently manage **vehicles, parking spots, and client reservations**. Built with **TypeScript**, **RxJS**, and **Angular CLI**, the system is structured with typed models and modular services, making it easy to extend with a REST API.

## Key Features
- **Vehicle Management** — register, update, archive vehicles
- **Reservation Management** — create, modify, cancel, and list client reservations
- **(Planned) Parking Spots** — model parking spaces and track availability
- **Typed Models & Services** — `automobile.model.ts`, `appuntamento.model.ts`, related services
- **Angular Architecture** — component‑driven UI, services for business logic, ready for HttpClient

> Scope: **Admin‑facing control panel** for internal operations, not a public self‑service booking portal.

## Tech Stack
- **Angular 16**, **TypeScript**, **RxJS**, **zone.js**
- **Angular CLI** build tooling
- Optional UI kits: Angular Material / Tailwind CSS (not required)

## Requirements
- **Node.js 18.x or 20.x**
- **npm 9+**
- **Angular CLI** (global): `npm i -g @angular/cli`

## Getting Started
```bash
# 1) Install dependencies
npm install

# 2) Start development server (http://localhost:4200)
npm start     # if defined
# or
ng serve

# 3) Production build
ng build --configuration production
```

The dev server runs at **http://localhost:4200** and supports hot reload.

## Repository Structure (excerpt)
```
GestioneParco/
  angular.json
  package.json
  tsconfig.json
  src/
    app/
      app.module.ts
      app.component.ts
      app.component.html
      models/
        automobile.model.ts
        appuntamento.model.ts
      services/
        automobile.service.ts
        appuntamento.service.ts
    assets/
    environments/           # add if you externalize API endpoints
```

## Configuration & Best Practices
- Define API base URLs in `src/environments/*` and consume them via **HttpClient** in services.
- Keep **models** pure (interfaces/types). Place **side effects** and data access in services.
- Use **routing** (AppRoutingModule) and **lazy loading** as the project grows.
- Add **unit tests** (Jest/Karma) and **e2e tests** (Cypress) for critical flows.

## Roadmap
- Parking spot entity, capacity and availability calendar
- Overlap validation for reservations (date/time conflicts)
- Authentication (JWT) and role‑based access (admin/operator)
- Persistent storage via REST API (Node/Express, .NET, or Firebase)
- Audit logs and reporting (CSV/PDF exports)
- i18n (Italian/English), responsive UI

## Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feat/parking-spots`
3. Commit changes: `git commit -m "feat: add parking spot model and availability checks"`
4. Push: `git push origin feat/parking-spots`
5. Open a Pull Request

## License
Add a license (e.g., **MIT**) in `LICENSE` if you plan to open‑source the project.
