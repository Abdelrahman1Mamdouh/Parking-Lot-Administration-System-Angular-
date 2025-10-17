# Gestione Parco Auto — Sistema di Amministrazione Parcheggi (Angular)

## Panoramica del Progetto
Applicazione web **Angular 16** progettata per **amministratori di parcheggi** al fine di gestire in modo efficiente **veicoli, posti auto e prenotazioni dei clienti**. Realizzata con **TypeScript**, **RxJS** e **Angular CLI**, adotta modelli tipizzati e servizi modulari, facilitando l'estensione con un'API REST.

## Funzionalità Principali
- **Gestione Veicoli** — registrazione, aggiornamento, archiviazione veicoli
- **Gestione Prenotazioni** — creazione, modifica, annullamento e consultazione prenotazioni clienti
- **(In roadmap) Posti Auto** — modellazione e tracciamento disponibilità dei posti
- **Modelli e Servizi Tipizzati** — `automobile.model.ts`, `appuntamento.model.ts` e servizi correlati
- **Architettura Angular** — UI a componenti, logica nei servizi, pronta per HttpClient

> Ambito: **Pannello di amministrazione** per uso interno, non un portale di prenotazione self‑service per il pubblico.

## Stack Tecnologico
- **Angular 16**, **TypeScript**, **RxJS**, **zone.js**
- **Angular CLI** per build e sviluppo
- UI opzionale: Angular Material / Tailwind CSS (non obbligatori)

## Requisiti
- **Node.js 18.x o 20.x**
- **npm 9+**
- **Angular CLI** (globale): `npm i -g @angular/cli`

## Avvio Rapido
```bash
# 1) Installa le dipendenze
npm install

# 2) Avvia il server di sviluppo (http://localhost:4200)
npm start     # se definito
# oppure
ng serve

# 3) Build di produzione
ng build --configuration production
```

Il dev server gira su **http://localhost:4200** con ricarica a caldo.

## Struttura del Repository (estratto)
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
    environments/           # aggiungi se esternalizzi gli endpoint API
```

## Configurazione & Buone Pratiche
- Definisci le base URL in `src/environments/*` e utilizza **HttpClient** nei servizi.
- Mantieni i **modelli** (interfacce/tipi) separati dalla logica; metti **side‑effect** e accesso dati nei servizi.
- Usa il **routing** (AppRoutingModule) e il **lazy loading** all'aumentare della complessità.
- Aggiungi **test unitari** (Jest/Karma) ed **e2e** (Cypress) per i flussi critici.

## Roadmap
- Entità Posto Auto, capacità e calendario disponibilità
- Validazione conflitti di prenotazione (data/ora sovrapposte)
- Autenticazione (JWT) e ruoli (admin/operatore)
- Persistenza via REST API (Node/Express, .NET o Firebase)
- Audit log e report (export CSV/PDF)
- i18n (Italiano/English), UI responsiva

## Contributi
1. Fai il fork del repository
2. Crea un branch: `git checkout -b feat/posti-auto`
3. Effettua i commit: `git commit -m "feat: aggiunge modello posto auto e controlli disponibilità"`
4. Push: `git push origin feat/posti-auto`
5. Apri una Pull Request

## Licenza
Aggiungi una licenza (es. **MIT**) in `LICENSE` se intendi pubblicare il progetto come open source.
