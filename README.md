# Sito Gruppo Zisa

Sito vetrina moderno per Gruppo Zisa - Azienda familiare innovativa specializzata in mirtilli/lamponi bio residuo zero e pannelli solari nella provincia di Ragusa.

## 🚀 Stack Tecnologico

- **Next.js 14** (App Router) - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animazioni fluide
- **Supabase** - Database PostgreSQL per form contatti
- **Google Maps API** - Mappa interattiva terreni
- **Vercel** - Hosting e deploy

## 📋 Prerequisiti

- ✅ Account Supabase (già creato)
- ✅ Account GitHub: **piuomenoweb**
- ✅ Repository: **GRUPPOZISA**
- ⚠️ Google Maps API Key (da configurare)
- ⚠️ Account Vercel (da collegare)

## 🚀 Quick Start - Deploy su Vercel

**Per deploy diretto senza test locale, segui la guida completa:**

👉 **[Vedi DEPLOY_VERCEL.md](DEPLOY_VERCEL.md)** per istruzioni dettagliate

### Setup Rapido:

1. **Push su GitHub**:
   ```bash
   git add .
   git commit -m "feat: setup iniziale sito Gruppo Zisa"
   git remote add origin https://github.com/piuomenoweb/GRUPPOZISA.git
   git branch -M main
   git push -u origin main
   ```

2. **Configura Supabase** (vedi DEPLOY_VERCEL.md sezione 2)

3. **Configura Google Maps** (vedi DEPLOY_VERCEL.md sezione 3)

4. **Deploy su Vercel** (vedi DEPLOY_VERCEL.md sezione 4)

## 🛠️ Setup Locale (Opzionale)

### 1. Clonare il repository

```bash
git clone <repository-url>
cd gruppozisa-site
```

### 2. Installare dipendenze

```bash
npm install
```

### 3. Configurare variabili d'ambiente

Crea un file `.env.local` nella root del progetto:

```env
NEXT_PUBLIC_SUPABASE_URL=sb_publishable_Of9FpsqMBIIoEjLUFaZztg_b2CB-JrJ
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_secret_pZFL7uvhenmXcUTwJhswjg_qtRo5QHI
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyCQU0UHkqns1ZesUb2OfHnvVfdlSL8K07U
```

### 4. Setup Supabase

1. Crea un progetto su [supabase.com](https://supabase.com)
2. Vai su SQL Editor
3. Esegui la migration da `supabase/migrations/20240101000000_create_leads_table.sql`
4. Copia URL e Anon Key nel `.env.local`

### 5. Setup Google Maps

1. Vai su [Google Cloud Console](https://console.cloud.google.com)
2. Crea un progetto o seleziona uno esistente
3. Abilita "Maps JavaScript API"
4. Crea una API Key
5. Configura restrizioni (HTTP referrer consigliato)
6. Copia la chiave nel `.env.local`

### 6. Aggiungere Logo

Aggiungi i file logo in `public/`:
- `logo-full.svg` (o `.png`) - Logo completo per hero e footer
- `logo-z.svg` (o `.png`) - Logo Z sola per header

### 7. Avviare il server di sviluppo

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## 📁 Struttura Progetto

```
gruppozisa-site/
├── public/                 # Asset statici (logo, immagini)
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Layout principale con metadata
│   │   ├── page.tsx       # Homepage con tutte le sezioni
│   │   └── globals.css    # Stili globali e Tailwind
│   ├── components/        # Componenti React
│   │   ├── Header.tsx     # Header con navigazione
│   │   ├── Hero.tsx       # Hero section con video
│   │   ├── About.tsx      # Sezione Chi Siamo
│   │   ├── Products.tsx   # Sezione Prodotti
│   │   ├── Map.tsx        # Mappa interattiva terreni
│   │   ├── Contact.tsx    # Form contatti
│   │   └── Footer.tsx     # Footer
│   └── lib/               # Utility e librerie
│       └── supabase.ts    # Client Supabase
├── supabase/
│   └── migrations/        # Migrations database
├── task/                  # Documentazione progetto
│   ├── PRD.md            # Product Requirements Document
│   └── REGOLE.md         # Regole ferree progetto
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Colori Brand

- **Blu principale**: `#1E3A8A` (zisa-blue)
- **Giallo sole**: `#FCD34D` (zisa-yellow)
- **Verde foglie**: `#10B981` (zisa-green)
- **Nero Z**: `#0F172A` (zisa-black)

## 📱 Sezioni del Sito

1. **Hero**: Logo, slogan, video YouTube, CTA
2. **Chi Siamo**: Timeline azienda, foto famiglia
3. **Prodotti**: Cards mirtilli, lamponi, pannelli solari
4. **Mappa**: Google Maps con 5 pin terreni
5. **Contatti**: Form con integrazione Supabase
6. **Footer**: Link, recapiti, social

## 🚢 Deploy su Vercel

### 1. Push su GitHub

```bash
git add .
git commit -m "feat: setup iniziale progetto"
git push origin main
```

### 2. Connettere a Vercel

1. Vai su [vercel.com](https://vercel.com)
2. Clicca "New Project"
3. Importa il repository GitHub
4. Configura variabili d'ambiente:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
5. Clicca "Deploy"

### 3. Verificare Deploy

- Controlla che il sito sia accessibile
- Testa form contatti
- Verifica mappa Google Maps
- Testa su mobile

## 🧪 Script Disponibili

- `npm run dev` - Avvia server sviluppo
- `npm run build` - Build produzione
- `npm run start` - Avvia server produzione
- `npm run lint` - Esegue linter

## 📝 Note Importanti

1. **Logo**: I file logo devono essere forniti e aggiunti in `public/`
2. **Immagini**: Attualmente usiamo placeholder/Unsplash. Sostituire con immagini reali
3. **Google Maps**: Richiede API key con billing abilitato (free tier disponibile)
4. **Supabase**: Free tier sufficiente per form contatti
5. **Vercel**: Free tier perfetto per hosting Next.js

## 🐛 Troubleshooting

### Form non invia dati
- Verifica variabili d'ambiente Supabase
- Controlla RLS policies su Supabase
- Verifica console browser per errori

### Mappa non carica
- Verifica API key Google Maps
- Controlla restrizioni API key
- Verifica console browser per errori

### Video YouTube non funziona
- Verifica URL video corretto
- Controlla che autoplay sia permesso dal browser
- Verifica che il video sia pubblico

## 📚 Documentazione Aggiuntiva

- [PRD Completo](task/PRD.md) - Product Requirements Document
- [Regole Ferree](task/REGOLE.md) - Regole di sviluppo e manutenzione

## 👥 Contatti

- **Email**: info@gruppozisa.it
- **Telefono**: 0932 825131
- **Sede**: Santa Croce Camerina, Ragusa

## 📄 Licenza

© 2024 Gruppo Zisa. Tutti i diritti riservati.

