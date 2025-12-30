# Product Requirements Document (PRD) - Sito Gruppo Zisa

## Obiettivo Principale

Creare un sito vetrina moderno che mostri Gruppo Zisa come azienda familiare innovativa: mirtilli/lamponi bio a residuo zero + pannelli solari, tutto nella provincia di Ragusa. Attira clienti (B2B agricolo/energetico), partner e visitatori locali. Design blu dominante con accenti verdi/gialli dal logo.

## Utenti Target

1. **Aziende alimentari**: Comprano mirtilli/lamponi all'ingrosso.
2. **Imprese/edifici**: Vogliono pannelli solari installati.
3. **Visitatori locali**: Curiosi di terreni, storia Zisa.
4. **Famiglia/collaboratori**: Mostrano il sito con orgoglio.

## Logo e Brand Identity

### Logo
- **Versione grande** (con mirtilli/sole): Hero homepage, footer.
- **Z sola**: Icona menu, favicon, mobile header.

### Colori Base
- **Blu principale**: `#1E3A8A` (zisa-blue)
- **Giallo sole**: `#FCD34D` (zisa-yellow)
- **Verde foglie**: `#10B981` (zisa-green)
- **Nero Z**: `#0F172A` (zisa-black)

### Font
- **Montserrat**: Testo titoli
- **Open Sans**: Corpo testo

## Struttura Pagine (Single-Page con Scroll Fluido)

### 1. Hero Section (Prima Schermata)

- Logo grande centrato
- Slogan principale: "Natura Blu, Energia Verde – Gruppo Zisa"
- Video YouTube embed (https://www.youtube.com/watch?v=8nPDsQF9M7I) autoplay mutato, dimensioni 16:9
- Bottone "Scopri i Nostri Terreni" → mappa

### 2. Chi Siamo (Origini Famiglia Zisa)

- Foto Giuseppe Zisa (da Sant'Orsola/video), Giannandrea Zisa, Emma Zisa
- Testo breve: "Dal 1997 orticole bio, dal 2015 mirtilli pionieristici (7 ettari residuo zero), soci Sant'Orsola. Giuseppe Zisa fondatore Zisa Emma & Stamilla Giovanna. Ora + solare rinnovabile."
- Timeline: 1997 orto, 2012 solare, 2015 lamponi/mirtilli, 2022 premio Residuo Zero
- Slogan secondario: "Dove il sole siciliano nutre frutti e futuro pulito."

### 3. Prodotti e Servizi

#### Agro
- Mirtilli/lamponi (foto campi serre)
- Benefici: Residuo zero, raccolta marzo-maggio, 100% naturale

#### Solare
- Installazione/manutenzione pannelli (foto "pannelli fotovoltaici Ragusa")
- Benefici: Energia verde locale, integrazione agrivoltaico

#### Tabella prodotti

| Prodotto | Descrizione | Benefici Bio/Rinnovabile |
|----------|-------------|-------------------------|
| Mirtilli | 7 ettari residuo zero | Antiossidanti naturali |
| Lamponi | Raccolta fresca Sicilia | Dolcezza soleggiata |
| Pannelli Solari | Installazione chiavi in mano | Risparmio + sostenibile |

### 4. Mappa Interattiva Terreni

Google Maps centrato Santa Croce Camerina (zoom 14, raggio 15km).

#### 5 Pin fittizi/realistici:

1. **Mirtilli Principale**: Contrada Petraro SP20 Km1 (36.77°N, 14.89°E) – 4ha
2. **Lamponi Nord**: Chiaramonte Gulfi dir. (36.82°N, 14.78°E) – 3ha
3. **Solare Est**: Comiso area (36.77°N, 14.93°E) – Impianto 50kW
4. **Misti Ovest**: Ragusa sud (36.75°N, 14.85°E) – 2ha + pannelli
5. **Sede Operativa**: Via Roma 123, Santa Croce (36.77°N, 14.88°E)

Ogni pin: Pop-up con foto (da Google), superficie, tipo, bottone "Contattaci per visita".

### 5. Contatti e Sede

#### Recapiti
- Tel: 0932 825131
- Email: info@gruppozisa.it (crea su Supabase)
- WhatsApp link

#### Sedi

| Tipo | Indirizzo |
|------|-----------|
| Sede Legale | Via Principe Umberto, Santa Croce Camerina |
| Operativa | Contrada Petraro SP20 Km1, 97010 Santa Croce |

#### Form semplice
- Nome
- Email
- Messaggio
- "Tipo interesse" (Agro/Solare/Visita)

#### Social
- LinkedIn Gruppo Zisa
- Instagram (crea se non esiste)

## Design e Stile

- **Colori**: Blu 80% (sfondi/header), giallo/verde accenti (bottoni, icone)
- **Layout**: Mobile-first, header fisso con Z + menu hamburger
- **Animazioni**: Sottili (fade-in sezioni, hover pin mappa)
- **Foto**: Da Google "Giuseppe Zisa mirtilli", "campi lamponi Ragusa", "famiglia Zisa agricola", "pannelli solari Sicilia"

## Flusso Logico per Cursor

1. **GitHub Repo**: Crea "gruppozisa-site", branch main
2. **Vercel**: Deploy istantaneo da GitHub (gratis, veloce anche su PC debole)
3. **Supabase**: Progetto gratis per form contatti (tabella "leads": nome, email, messaggio)
4. **Build**: Usa template Next.js/Framer starter, copia sezioni sopra, embed video/mappa
5. **Test**: Mobile/desktop, submit form salva su Supabase

## Stack Tecnologico

- **Framework**: Next.js 14 (App Router)
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS
- **Animazioni**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Maps**: Google Maps API
- **Hosting**: Vercel
- **Versionamento**: GitHub

## Requisiti Tecnici

### Variabili d'Ambiente
- `NEXT_PUBLIC_SUPABASE_URL`: URL progetto Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Chiave anonima Supabase
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`: Chiave API Google Maps

### Dipendenze Principali
- next: ^14.0.4
- react: ^18.2.0
- @supabase/supabase-js: ^2.38.5
- framer-motion: ^10.16.16
- react-icons: ^4.12.0
- tailwindcss: ^3.4.0
- typescript: ^5.3.3

## Note di Implementazione

1. **Logo**: I file logo devono essere forniti dall'utente o creati separatamente
2. **Immagini**: Usare placeholder o immagini da Unsplash per sviluppo
3. **Google Maps**: Richiede API key con billing abilitato (free tier disponibile)
4. **Supabase**: Free tier sufficiente per form contatti
5. **Vercel**: Free tier perfetto per hosting Next.js

## Success Criteria

- ✅ Sito responsive su mobile, tablet, desktop
- ✅ Form contatti funzionante con salvataggio su Supabase
- ✅ Mappa interattiva con 5 pin funzionanti
- ✅ Video YouTube embed funzionante
- ✅ Smooth scroll navigation funzionante
- ✅ Animazioni fluide e performanti
- ✅ SEO ottimizzato
- ✅ Deploy su Vercel funzionante

