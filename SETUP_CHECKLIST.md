# ✅ Checklist Setup - Gruppo Zisa

## Stato Attuale
- ✅ Repository GitHub creato: `piuomenoweb/GRUPPOZISA`
- ✅ Codice committato localmente
- ✅ Password Supabase salvata: `7d74zVyC6dJ@g&#` (in `.credentials.txt`)
- ⏳ Push su GitHub (richiede autenticazione manuale)
- ⏳ Setup Supabase
- ⏳ Setup Google Maps
- ⏳ Deploy Vercel

---

## 📋 STEP 1: Push su GitHub (Fai tu manualmente)

Apri PowerShell e esegui:

```powershell
cd "C:\Users\nifos\Desktop\1PROGETTI\PRIMO"
git push -u origin main
```

**Quando richiesto:**
- Username: `piuomenoweb`
- Password: Usa un **Personal Access Token** (vedi sotto)

### Creare Personal Access Token:
1. Vai su: https://github.com/settings/tokens
2. "Generate new token" → "Generate new token (classic)"
3. Nome: `GRUPPOZISA-deploy`
4. Seleziona: `repo` (tutti i permessi)
5. "Generate token"
6. **COPIA IL TOKEN** (inizia con `ghp_...`)
7. Usa questo token come password quando git lo richiede

---

## 📋 STEP 2: Setup Supabase

### 2.1 Crea Progetto Supabase

1. Vai su: https://supabase.com
2. Accedi al tuo account
3. Clicca **"New Project"**
4. Compila:
   - **Name**: `gruppozisa-site`
   - **Database Password**: `7d74zVyC6dJ@g&#` ⚠️ (salvata in `.credentials.txt`)
   - **Region**: West Europe (o la più vicina)
5. Clicca **"Create new project"**
6. ⏳ Attendi 2-3 minuti per il setup

### 2.2 Esegui Migration SQL

1. Nel progetto Supabase, vai su **"SQL Editor"** (menu sinistro)
2. Clicca **"New query"**
3. Apri il file: `supabase/migrations/20240101000000_create_leads_table.sql`
4. **Copia tutto il contenuto** e incollalo nell'editor SQL
5. Clicca **"Run"** (o premi F5)
6. ✅ Verifica successo: dovresti vedere "Success. No rows returned"

### 2.3 Verifica Tabella Creata

1. Vai su **"Table Editor"** (menu sinistro)
2. Dovresti vedere la tabella **"leads"**
3. Clicca su "leads" per vedere la struttura

### 2.4 Copia Credenziali Supabase

1. Vai su **"Settings"** → **"API"**
2. **Copia questi valori** (li userai su Vercel):

   **Project URL:**
   ```
   https://xxxxx.supabase.co
   ```

   **anon/public key:**
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx...
   ```

3. **Salva queste credenziali** da qualche parte (le userai su Vercel)

---

## 📋 STEP 3: Setup Google Maps API

### 3.1 Crea Progetto Google Cloud

1. Vai su: https://console.cloud.google.com
2. Clicca sul menu a tendina in alto (dove c'è il nome progetto)
3. Clicca **"New Project"**
4. Nome: `gruppozisa-maps`
5. Clicca **"Create"**
6. Seleziona il progetto appena creato dal menu

### 3.2 Abilita Maps JavaScript API

1. Vai su **"APIs & Services"** → **"Library"**
2. Cerca: **"Maps JavaScript API"**
3. Clicca e poi **"Enable"**
4. ⏳ Attendi qualche secondo

### 3.3 Crea API Key

1. Vai su **"APIs & Services"** → **"Credentials"**
2. Clicca **"Create Credentials"** → **"API Key"**
3. **COPIA LA CHIAVE** generata (inizia con `AIza...`)
4. ⚠️ **NON chiudere ancora questa pagina!**

### 3.4 Configura Restrizioni (IMPORTANTE!)

1. Clicca sulla chiave appena creata per modificarla
2. In **"Application restrictions"**:
   - Seleziona **"HTTP referrers (web sites)"**
   - Clicca **"Add an item"** e aggiungi:
     - `localhost:3000/*`
     - `*.vercel.app/*`
     - `gruppozisa.vercel.app/*` (se hai un dominio custom)
3. In **"API restrictions"**:
   - Seleziona **"Restrict key"**
   - Seleziona solo **"Maps JavaScript API"**
4. Clicca **"Save"**
5. **Salva la chiave** da qualche parte (la userai su Vercel)

---

## 📋 STEP 4: Deploy su Vercel

### 4.1 Connetti GitHub a Vercel

1. Vai su: https://vercel.com
2. Accedi (puoi usare GitHub)
3. Clicca **"Add New..."** → **"Project"**
4. Clicca **"Import Git Repository"**
5. Seleziona: **piuomenoweb/GRUPPOZISA**
6. Clicca **"Import"**

### 4.2 Configura Progetto

1. **Project Name**: `gruppozisa` (o lascia default)
2. **Framework Preset**: Next.js (dovrebbe essere rilevato automaticamente)
3. **Root Directory**: `./` (default)
4. **Build Command**: `npm run build` (default)
5. **Output Directory**: `.next` (default)

### 4.3 Aggiungi Variabili d'Ambiente (IMPORTANTE!)

**PRIMA di cliccare "Deploy", aggiungi queste 3 variabili:**

1. Clicca su **"Environment Variables"** (sotto "Build and Output Settings")
2. Aggiungi una per una:

   **Variabile 1:**
   - Name: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: (incolla il Project URL da Supabase)
   - Environment: ✅ Production, ✅ Preview, ✅ Development
   - Clicca **"Save"**

   **Variabile 2:**
   - Name: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: (incolla l'anon key da Supabase)
   - Environment: ✅ Production, ✅ Preview, ✅ Development
   - Clicca **"Save"**

   **Variabile 3:**
   - Name: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
   - Value: (incolla la Google Maps API key)
   - Environment: ✅ Production, ✅ Preview, ✅ Development
   - Clicca **"Save"**

### 4.4 Deploy!

1. Clicca **"Deploy"**
2. ⏳ Attendi 2-3 minuti per il build
3. ✅ Vercel ti darà un URL tipo: `https://gruppozisa-xxxxx.vercel.app`

---

## 📋 STEP 5: Verifica Deploy

### 5.1 Controlla il Sito

1. Apri l'URL del sito Vercel
2. Verifica:
   - ✅ Logo visibili (hero e header)
   - ✅ Video YouTube in autoplay
   - ✅ Smooth scroll funziona
   - ✅ Mappa carica (potrebbe servire qualche secondo)
   - ✅ Form contatti visibile

### 5.2 Testa il Form Contatti

1. Vai alla sezione "Contatti"
2. Compila il form con dati di test:
   - Nome: Test
   - Email: test@example.com
   - Tipo: Agro
   - Messaggio: Test form
3. Clicca "Invia Messaggio"
4. Dovresti vedere messaggio verde "Messaggio inviato con successo!"
5. Vai su Supabase → **"Table Editor"** → tabella **"leads"**
6. ✅ Dovresti vedere il nuovo record inserito

### 5.3 Verifica la Mappa

1. Vai alla sezione "Terreni"
2. La mappa dovrebbe caricare (potrebbe servire 5-10 secondi)
3. Dovresti vedere 5 pin con la "Z"
4. Clicca su un pin → dovrebbe aprirsi il modale con dettagli

---

## 🎉 Completato!

Se tutto funziona:
- ✅ Sito online su Vercel
- ✅ Form contatti salva su Supabase
- ✅ Mappa interattiva funzionante
- ✅ Video YouTube embed funzionante

---

## 🆘 Problemi Comuni

### Mappa non carica
- Verifica che la Google Maps API key sia corretta su Vercel
- Controlla la console del browser (F12) per errori
- Verifica che le restrizioni API key includano `*.vercel.app/*`

### Form non invia
- Verifica le credenziali Supabase su Vercel
- Controlla che la migration SQL sia stata eseguita
- Verifica la console del browser per errori

### Build fallisce su Vercel
- Controlla i log di build su Vercel (clicca sul deployment)
- Verifica che tutte le dipendenze siano in `package.json`
- Assicurati che non ci siano errori TypeScript

---

**Password Supabase**: Salvata in `.credentials.txt` (privata, non committata)

