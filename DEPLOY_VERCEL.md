# 🚀 Guida Deploy su Vercel - Gruppo Zisa

## Prerequisiti Completati ✅

- ✅ Account Supabase creato
- ✅ Account GitHub: **piuomenoweb**
- ✅ Repository: **GRUPPOZISA**
- ✅ Password Supabase salvata in `.credentials.txt` (privata)

## Step 1: Push su GitHub

### 1.1 Aggiungi tutti i file

```bash
git add .
```

### 1.2 Crea il primo commit

```bash
git commit -m "feat: setup iniziale sito Gruppo Zisa"
```

### 1.3 Collega al repository GitHub

```bash
git remote add origin https://github.com/piuomenoweb/GRUPPOZISA.git
```

### 1.4 Push sul branch main

```bash
git branch -M main
git push -u origin main
```

**Nota**: Se GitHub ti chiede autenticazione, usa un Personal Access Token invece della password.

---

## Step 2: Setup Supabase

### 2.1 Crea il progetto su Supabase

1. Vai su [supabase.com](https://supabase.com) e accedi
2. Clicca **"New Project"**
3. Compila:
   - **Name**: `gruppozisa-site`
   - **Database Password**: `7d74zVyC6dJ@g&#` (salvata in `.credentials.txt`)
   - **Region**: West Europe (o la più vicina)
4. Clicca **"Create new project"** (attendi 2-3 minuti)

### 2.2 Esegui la Migration SQL

1. Nel progetto Supabase, vai su **"SQL Editor"** (menu sinistro)
2. Clicca **"New query"**
3. Apri il file `supabase/migrations/20240101000000_create_leads_table.sql`
4. Copia tutto il contenuto e incollalo nell'editor SQL
5. Clicca **"Run"** (o premi F5)
6. Verifica che la tabella `leads` sia stata creata:
   - Vai su **"Table Editor"**
   - Dovresti vedere la tabella `leads`

### 2.3 Copia le Credenziali Supabase

1. Vai su **"Settings"** → **"API"**
2. Copia questi valori (li userai su Vercel):
   - **Project URL** → `https://xxxxx.supabase.co`
   - **anon/public key** → `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

---

## Step 3: Setup Google Maps API

### 3.1 Crea progetto su Google Cloud

1. Vai su [Google Cloud Console](https://console.cloud.google.com)
2. Clicca sul menu a tendina in alto (dove c'è il nome progetto)
3. Clicca **"New Project"**
4. Nome: `gruppozisa-maps`
5. Clicca **"Create"**

### 3.2 Abilita Maps JavaScript API

1. Vai su **"APIs & Services"** → **"Library"**
2. Cerca **"Maps JavaScript API"**
3. Clicca e poi **"Enable"**

### 3.3 Crea API Key

1. Vai su **"APIs & Services"** → **"Credentials"**
2. Clicca **"Create Credentials"** → **"API Key"**
3. **Copia la chiave** generata (inizia con `AIza...`)

### 3.4 Configura Restrizioni (IMPORTANTE per sicurezza)

1. Clicca sulla chiave appena creata per modificarla
2. In **"Application restrictions"**:
   - Seleziona **"HTTP referrers (web sites)"**
   - Aggiungi:
     - `localhost:3000/*`
     - `*.vercel.app/*`
     - `gruppozisa.vercel.app/*` (se hai un dominio custom)
3. In **"API restrictions"**:
   - Seleziona **"Restrict key"**
   - Seleziona solo **"Maps JavaScript API"**
4. Clicca **"Save"**

---

## Step 4: Deploy su Vercel

### 4.1 Connetti GitHub a Vercel

1. Vai su [vercel.com](https://vercel.com) e accedi (puoi usare GitHub)
2. Clicca **"Add New..."** → **"Project"**
3. Clicca **"Import Git Repository"**
4. Seleziona il repository **piuomenoweb/GRUPPOZISA**
5. Clicca **"Import"**

### 4.2 Configura il Progetto

1. **Project Name**: `gruppozisa` (o lascia default)
2. **Framework Preset**: Next.js (dovrebbe essere rilevato automaticamente)
3. **Root Directory**: `./` (default)
4. **Build Command**: `npm run build` (default)
5. **Output Directory**: `.next` (default)

### 4.3 Aggiungi Variabili d'Ambiente

**IMPORTANTE**: Aggiungi queste 3 variabili prima di fare deploy:

1. Clicca su **"Environment Variables"**
2. Aggiungi una per una:

   **Variabile 1:**
   - Name: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: (incolla il Project URL da Supabase)
   - Environment: ✅ Production, ✅ Preview, ✅ Development

   **Variabile 2:**
   - Name: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: (incolla l'anon key da Supabase)
   - Environment: ✅ Production, ✅ Preview, ✅ Development

   **Variabile 3:**
   - Name: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
   - Value: (incolla la Google Maps API key)
   - Environment: ✅ Production, ✅ Preview, ✅ Development

3. Clicca **"Save"** per ognuna

### 4.4 Deploy!

1. Clicca **"Deploy"**
2. Attendi 2-3 minuti per il build
3. Vercel ti darà un URL tipo: `https://gruppozisa-xxxxx.vercel.app`

---

## Step 5: Verifica il Deploy

### 5.1 Controlla che tutto funzioni

1. Apri l'URL del sito Vercel
2. Verifica:
   - ✅ Logo visibili (hero e header)
   - ✅ Video YouTube in autoplay
   - ✅ Smooth scroll funziona
   - ✅ Mappa carica (potrebbe servire qualche secondo)
   - ✅ Form contatti: compila e invia un test

### 5.2 Testa il Form Contatti

1. Vai alla sezione "Contatti"
2. Compila il form con dati di test
3. Invia
4. Vai su Supabase → **"Table Editor"** → tabella **"leads"**
5. Dovresti vedere il nuovo record inserito

### 5.3 Verifica la Mappa

1. Vai alla sezione "Terreni"
2. La mappa dovrebbe caricare
3. Dovresti vedere 5 pin con la "Z"
4. Clicca su un pin → dovrebbe aprirsi il modale

---

## Troubleshooting

### Mappa non carica
- Verifica che la Google Maps API key sia corretta su Vercel
- Controlla la console del browser (F12) per errori
- Verifica che le restrizioni API key includano `*.vercel.app/*`

### Form non invia
- Verifica le credenziali Supabase su Vercel
- Controlla che la migration SQL sia stata eseguita
- Verifica la console del browser per errori

### Build fallisce su Vercel
- Controlla i log di build su Vercel
- Verifica che tutte le dipendenze siano in `package.json`
- Assicurati che non ci siano errori TypeScript

---

## Prossimi Passi

1. ✅ Deploy completato
2. 🔄 Configura dominio custom (opzionale)
3. 📊 Aggiungi analytics (opzionale)
4. 🔒 Configura backup Supabase (opzionale)

---

**Password Supabase salvata in**: `.credentials.txt` (non committata, privata)

