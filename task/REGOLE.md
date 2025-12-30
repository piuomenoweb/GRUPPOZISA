# Regole Ferree - Progetto Sito Gruppo Zisa

## Regole di Codice

### 1. Struttura File e Organizzazione

- **Sempre usare TypeScript** per tutti i file `.ts` e `.tsx`
- **Componenti React** devono essere in `src/components/` con naming PascalCase
- **Utility e librerie** in `src/lib/`
- **Asset statici** (logo, immagini) in `public/`
- **Migrations database** in `supabase/migrations/`

### 2. Convenzioni di Naming

- **Componenti**: PascalCase (`Header.tsx`, `Hero.tsx`)
- **File utility**: camelCase (`supabase.ts`)
- **Variabili e funzioni**: camelCase (`handleSubmit`, `formData`)
- **Costanti**: UPPER_SNAKE_CASE (`NEXT_PUBLIC_SUPABASE_URL`)
- **Tipi/Interfaces**: PascalCase (`Terreno`, `FormData`)

### 3. Componenti React

#### Regole Obbligatorie:
- Tutti i componenti devono essere **Client Components** (`'use client'`) se usano hooks o interattività
- Usare **Next.js Image** per tutte le immagini (`import Image from 'next/image'`)
- Aggiungere **aria-label** a tutti i bottoni icona
- Gestire **loading states** e **error states** sempre

#### Esempio Struttura:
```tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ComponentName() {
  // Hooks
  // State
  // Effects
  // Handlers
  // Render
}
```

### 4. Styling con Tailwind CSS

- **Sempre mobile-first**: iniziare con classi mobile, poi `md:`, `lg:`
- **Usare colori brand**: `zisa-blue`, `zisa-yellow`, `zisa-green`, `zisa-black`
- **Usare font brand**: `font-montserrat` per titoli, `font-opensans` per corpo
- **Non usare classi inline style**: solo Tailwind
- **Spaziature consistenti**: `p-4`, `mb-8`, `gap-6`

### 5. Animazioni Framer Motion

- **Sempre usare `whileInView`** per animazioni al scroll
- **Aggiungere `viewport={{ once: true }}`** per performance
- **Transizioni smooth**: `duration: 0.8`, `delay` incrementale per sequenze
- **Hover effects**: `whileHover`, `whileTap` per interattività

### 6. Gestione Form e Supabase

- **Validazione client-side** obbligatoria prima del submit
- **Gestire loading state** durante submit
- **Mostrare feedback** success/error all'utente
- **Reset form** dopo submit successo
- **Error handling** completo con try/catch

### 7. Google Maps Integration

- **Caricamento script dinamico** con useEffect
- **Gestire stato loading** della mappa
- **Marker personalizzati** con SVG inline
- **Popup modale** per dettagli terreno
- **Gestire errori** caricamento API

### 8. Accessibilità (A11y)

- **Semantic HTML**: usare `<header>`, `<section>`, `<footer>`, `<nav>`
- **Alt text** per tutte le immagini
- **Aria labels** per bottoni icona
- **Focus states** visibili su tutti gli elementi interattivi
- **Contrasto colori** sufficiente (WCAG AA minimo)

### 9. Performance

- **Lazy loading** immagini con Next.js Image
- **Code splitting** automatico con Next.js
- **Ottimizzare bundle**: importare solo quello che serve
- **Evitare re-render inutili**: usare `useMemo`, `useCallback` quando necessario
- **Animazioni performanti**: preferire `transform` e `opacity`

### 10. SEO

- **Metadata completo** in `layout.tsx`
- **Open Graph tags** per social sharing
- **Twitter Card tags**
- **Structured data** (opzionale ma consigliato)
- **URL semantiche** e descrittive

## Regole di Git e Versionamento

### 1. Commit Messages

- **Formato**: `[tipo] descrizione breve`
- **Tipi**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- **Esempi**:
  - `feat: aggiunto componente Hero con video YouTube`
  - `fix: corretto errore submit form Supabase`
  - `style: migliorato responsive design mobile`

### 2. Branch Strategy

- **main**: branch di produzione (sempre deployabile)
- **develop**: branch di sviluppo (opzionale)
- **feature/nome-feature**: per nuove feature
- **fix/nome-fix**: per bug fix

### 3. Pull Requests

- **Descrizione chiara** di cosa fa il PR
- **Screenshots** per cambiamenti UI
- **Test manuali** effettuati
- **Review** prima di merge su main

## Regole di Deploy

### 1. Vercel

- **Variabili d'ambiente** devono essere configurate su Vercel
- **Preview deployments** per ogni PR
- **Production deploy** solo da main branch
- **Verificare** che tutte le variabili d'ambiente siano presenti

### 2. Supabase

- **Migrations** devono essere eseguite manualmente su Supabase Dashboard
- **RLS policies** devono essere configurate correttamente
- **Testare** inserimento dati dopo deploy

### 3. Google Maps

- **API key** deve avere restrizioni corrette (HTTP referrer)
- **Billing** deve essere abilitato (free tier disponibile)
- **Quota** monitorare per evitare costi inattesi

## Regole di Testing

### 1. Test Manuali Obbligatori

- ✅ **Form contatti**: submit, validazione, errori
- ✅ **Mappa**: caricamento, marker, popup
- ✅ **Video YouTube**: autoplay, responsive
- ✅ **Smooth scroll**: tutte le sezioni
- ✅ **Menu mobile**: hamburger, chiusura
- ✅ **Responsive**: mobile, tablet, desktop

### 2. Browser Support

- **Chrome** (ultime 2 versioni)
- **Firefox** (ultime 2 versioni)
- **Safari** (ultime 2 versioni)
- **Edge** (ultime 2 versioni)

### 3. Device Testing

- **Mobile**: iPhone, Android (varie dimensioni)
- **Tablet**: iPad, Android tablet
- **Desktop**: 1920x1080, 1366x768

## Regole di Documentazione

### 1. README.md

- **Setup instructions** complete
- **Variabili d'ambiente** documentate
- **Script disponibili** (`npm run dev`, `npm run build`, etc.)
- **Struttura progetto** spiegata

### 2. Commenti nel Codice

- **Commentare logica complessa**
- **JSDoc** per funzioni pubbliche
- **TODO** per funzionalità future
- **Evitare commenti ovvi**

## Regole di Sicurezza

### 1. Variabili d'Ambiente

- **Mai committare** `.env.local` o `.env`
- **Usare** `.env.local.example` come template
- **Verificare** che non ci siano chiavi API nel codice

### 2. Supabase RLS

- **Sempre abilitare** Row Level Security
- **Policies** devono essere restrittive per default
- **Testare** che utenti non autenticati non possano leggere dati sensibili

### 3. Input Validation

- **Validare** tutti gli input utente
- **Sanitizzare** dati prima di salvare
- **Proteggere** contro XSS e SQL injection

## Regole di Manutenzione

### 1. Dipendenze

- **Aggiornare** dipendenze regolarmente
- **Verificare** breaking changes prima di aggiornare major version
- **Usare** `npm audit` per sicurezza

### 2. Performance Monitoring

- **Monitorare** Core Web Vitals
- **Ottimizzare** immagini e bundle size
- **Usare** Lighthouse per audit regolari

### 3. Backup

- **Backup** database Supabase regolarmente
- **Versionare** migrations
- **Documentare** cambiamenti importanti

## Violazioni e Sanzioni

- **Violazione regole codice**: richiesta di refactor prima di merge
- **Violazione sicurezza**: blocco immediato e fix urgente
- **Violazione performance**: ottimizzazione obbligatoria
- **Violazione accessibilità**: fix prima di deploy produzione

## Note Finali

Queste regole sono **ferree** e devono essere seguite rigorosamente. In caso di dubbi, consultare questo documento o chiedere chiarimenti prima di procedere.

**Ultimo aggiornamento**: Gennaio 2024

