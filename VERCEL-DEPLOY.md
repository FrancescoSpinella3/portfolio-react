Deploy su Vercel — istruzioni rapide

1) Collegare il repository
- Vai su https://vercel.com, accedi con GitHub (o crea account).
- Clicca "New Project" e importa il repository `portfolio-react`.

2) Configurazioni principali
- Framework: Vercel rileva Vite; in caso di dubbio scegli "Other".
- Build Command: `npm run build`
- Output Directory: `dist`

3) Headers e sicurezza
- È presente `vercel.json` nel repo con header di sicurezza comuni (CSP, HSTS, X-Frame-Options, ecc.). Vercel applicherà questi header automaticamente.

4) Variabili d'ambiente
- Se il sito usa API o chiavi, aggiungi le variabili in Project Settings → Environment Variables.
- Non commettere segreti nel repository.

5) Domain & HTTPS
- Aggiungi un dominio personalizzato in Vercel (se ne hai uno) e abilita HTTPS automaticamente.

6) Anteprima e rollbacks
- Ogni PR genera una Preview URL; verifica funzionalità e accessibilità su mobile/desktop.
- Vercel mantiene le release e permette rollback rapidi.

7) Tips
- Usa la sezione "Analytics" di Vercel o integra un servizio di monitoring (Sentry) per errori runtime.
- Per caching static assets, Vercel serve file con caching basato sugli header e sui nomi hashati.

Comandi utili locali prima di pushare:
```
npm ci
npm run lint
npm run build
npm run preview
```

Se vuoi, configuro automaticamente `vercel.json` (già incluso) o creo istruzioni personalizzate per variabili d'ambiente che usi.
