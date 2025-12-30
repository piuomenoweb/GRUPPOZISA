# 🚀 Guida Passo-Passo Completa - Setup Gruppo Zisa

## ✅ STATO ATTUALE

- ✅ Codice completo e pronto
- ✅ Repository GitHub: `piuomenoweb/GRUPPOZISA`
- ✅ Password Supabase salvata: `7d74zVyC6dJ@g&#`
- ✅ File di supporto creati:
  - `SUPABASE_SETUP.sql` - SQL da eseguire su Supabase
  - `CREDENZIALI_TEMPLATE.txt` - Template per variabili Vercel
  - `SETUP_CHECKLIST.md` - Checklist completa

---

## 📋 STEP 1: Push su GitHub

### ⚠️ AZIONE MANUALE RICHIESTA

Apri PowerShell nella cartella del progetto:

```powershell
cd "C:\Users\nifos\Desktop\1PROGETTI\PRIMO"
git push -u origin main
```

**Quando richiesto:**
- Username: `piuomenoweb`
- Password: Usa un **Personal Access Token**

### Come creare Personal Access Token:

1. Vai su: https://github.com/settings/tokens
2. Clicca **"Generate new token"** → **"Generate new token (classic)"**
3. Nome: `GRUPPOZISA-deploy`
4. Seleziona scope: `repo` (tutti i permessi)
5. Clicca **"Generate token"**
6. **COPIA IL TOKEN** (inizia con `ghp_...`)
7. Usa questo token come password quando git lo richiede

**✅ Verifica**: Vai su https://github.com/piuomenoweb/GRUPPOZISA e verifica che il codice sia presente

---

## 📋 STEP 2: Setup Supabase

### 2.1 Crea Progetto Supabase

1. Vai su: **https://supabase.com**
2. Accedi al tuo account
3. Clicca **"New Project"**
4. Compila:
   - **Name**: `gruppozisa-site`
   - **Database Password**: `7d74zVyC6dJ@g&#` ⚠️
   - **Region**: West Europe (o la più vicina)
5. Clicca **"Create new project"**
6. ⏳ Attendi 2-3 minuti per il setup

### 2.2 Esegui Migration SQL

1. Nel progetto Supabase, vai su **"SQL Editor"** (menu sinistro)
2. Clicca **"New query"**
3. Apri il file **`SUPABASE_SETUP.sql`** (nella root del progetto)
4. **Copia tutto il contenuto** e incollalo nell'editor SQL
5. Clicca **"Run"** (o premi F5)
6. ✅ Verifica: dovresti vedere "Success. No rows returned"

### 2.3 Verifica Tabella Creata

1. Vai su **"Table Editor"** (menu sinistro)
2. Dovresti vedere la tabella **"leads"**
3. Clicca su "leads" per vedere la struttura con queste colonne:
   - `id` (bigint, primary key)
   - `nome` (text)
   - `email` (text)
   - `messaggio` (text)
   - `tipo_interesse` (text)
   - `created_at` (timestamp)

### 2.4 Copia Credenziali Supabase

1. Vai su **"Settings"** → **"API"**
2. **Copia questi valori** (li userai su Vercel):

   **Project URL:**
   ```
   https://xxxxx.supabase.co
   ```
   (Copia questo valore completo)

   **anon/public key:**
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx...
   ```
   (Copia questo valore completo - è molto lungo)

3. **Salva queste credenziali** temporaneamente (le userai tra poco su Vercel)

**✅ Verifica**: Hai copiato sia il Project URL che l'anon key

---

## 📋 STEP 3: Setup Google Maps API ⏭️ SALTATO PER ORA

**Nota**: La mappa interattiva verrà implementata in un secondo momento. Per ora il sito funziona con un placeholder statico.

Vedi `GOOGLE_MAPS_SETUP.md` per le istruzioni quando sarai pronto.

---

## 📋 STEP 3 (SALTATO): Setup Google Maps API

### 3.1 Crea Progetto Google Cloud

1. Vai su: **https://console.cloud.google.com**
2. Clicca sul menu a tendina in alto (dove c'è il nome progetto)
3. Clicca **"New Project"**
4. Nome: `gruppozisa-maps`
5. Clicca **"Create"**
6. Seleziona il progetto appena creato dal menu a tendina

### 3.2 Abilita Maps JavaScript API

1. Vai su **"APIs & Services"** → **"Library"** (menu sinistro)
2. Cerca nella barra di ricerca: **"Maps JavaScript API"**
3. Clicca su **"Maps JavaScript API"**
4. Clicca **"Enable"**
5. ⏳ Attendi qualche secondo

### 3.3 Crea API Key

1. Vai su **"APIs & Services"** → **"Credentials"** (menu sinistro)
2. Clicca **"Create Credentials"** (in alto) → **"API Key"**
3. **COPIA LA CHIAVE** generata (inizia con `AIza...`)
4. ⚠️ **NON chiudere ancora questa pagina!**

### 3.4 Configura Restrizioni (IMPORTANTE per sicurezza!)

1. Clicca sulla chiave appena creata per modificarla
2. In **"Application restrictions"**:
   - Seleziona **"HTTP referrers (web sites)"**
   - Clicca **"Add an item"** e aggiungi uno alla volta:
     - `localhost:3000/*`
     - `*.vercel.app/*`
     - (Opzionale) `gruppozisa.vercel.app/*` se hai un dominio custom
3. In **"API restrictions"**:
   - Seleziona **"Restrict key"**
   - Seleziona solo **"Maps JavaScript API"** (deseleziona le altre)
4. Clicca **"Save"** in basso
5. **Salva la chiave** temporaneamente (la userai su Vercel)

**✅ Verifica**: Hai copiato la Google Maps API key e configurato le restrizioni

---

## 📋 STEP 4: Deploy su Vercel

### 4.1 Connetti GitHub a Vercel

1. Vai su: **https://vercel.com**
2. Accedi (puoi usare "Continue with GitHub")
3. Se è la prima volta, autorizza Vercel ad accedere a GitHub
4. Clicca **"Add New..."** → **"Project"**
5. Clicca **"Import Git Repository"**
6. Seleziona: **piuomenoweb/GRUPPOZISA**
7. Clicca **"Import"**

### 4.2 Configura Progetto

1. **Project Name**: `gruppozisa` (o lascia default)
2. **Framework Preset**: Next.js (dovrebbe essere rilevato automaticamente)
3. **Root Directory**: `./` (default - lascia così)
4. **Build Command**: `npm run build` (default - lascia così)
5. **Output Directory**: `.next` (default - lascia così)

### 4.3 Aggiungi Variabili d'Ambiente ⚠️ IMPORTANTE!

**PRIMA di cliccare "Deploy", DEVI aggiungere queste 2 variabili (Google Maps verrà aggiunta dopo):**

1. Clicca su **"Environment Variables"** (sotto "Build and Output Settings")
2. Aggiungi una per una:

   **Variabile 1 - Supabase URL:**
   - Name: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: (incolla il Project URL che hai copiato da Supabase)
   - Environment: ✅ Production, ✅ Preview, ✅ Development
   - Clicca **"Save"**

   **Variabile 2 - Supabase Key:**
   - Name: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: (incolla l'anon key che hai copiato da Supabase)
   - Environment: ✅ Production, ✅ Preview, ✅ Development
   - Clicca **"Save"**

   **⚠️ Variabile 3 - Google Maps: SALTATA PER ORA**
   - Verrà aggiunta in un secondo momento (vedi `GOOGLE_MAPS_SETUP.md`)

3. **Verifica**: Dovresti vedere 2 variabili nella lista (Supabase URL e Supabase Key)

### 4.4 Deploy!

1. Clicca **"Deploy"** (in basso)
2. ⏳ Attendi 2-3 minuti per il build
3. ✅ Vercel ti darà un URL tipo: `https://gruppozisa-xxxxx.vercel.app`
4. Clicca sull'URL per aprire il sito

**✅ Verifica**: Il sito si apre e vedi la homepage

---

## 📋 STEP 5: Verifica Funzionamento

### 5.1 Controlla il Sito

Apri l'URL del sito Vercel e verifica:

- ✅ Logo visibili (hero e header)
- ✅ Video YouTube in autoplay (muted)
- ✅ Smooth scroll funziona (clicca sui link del menu)
- ✅ Mappa carica (sezione "Terreni" - potrebbe servire 5-10 secondi)
- ✅ Form contatti visibile (sezione "Contatti")

### 5.2 Testa il Form Contatti

1. Vai alla sezione "Contatti" (scroll o click menu)
2. Compila il form con dati di test:
   - Nome: `Test Gruppo Zisa`
   - Email: `test@gruppozisa.it`
   - Tipo interesse: `Agro`
   - Messaggio: `Test form contatti - verifica funzionamento`
3. Clicca **"Invia Messaggio"**
4. ✅ Dovresti vedere messaggio verde: "Messaggio inviato con successo!"
5. Vai su Supabase → **"Table Editor"** → tabella **"leads"**
6. ✅ Dovresti vedere il nuovo record inserito con i dati che hai inserito

### 5.3 Verifica la Sezione Terreni

1. Vai alla sezione "Terreni" (scroll o click menu)
2. Dovresti vedere un placeholder per la mappa (blu con icona pin)
3. Sotto dovresti vedere 5 card con i terreni:
   - Mirtilli Principale
   - Lamponi Nord
   - Solare Est
   - Misti Ovest
   - Sede Operativa
4. Clicca su una card → dovrebbe aprirsi un modale con:
   - Foto del terreno
   - Nome terreno
   - Descrizione
   - Superficie
   - Indirizzo
   - Bottone "Contattaci per Visita"
5. Clicca "Contattaci per Visita" → dovrebbe scrollare alla sezione Contatti

**Nota**: La mappa interattiva verrà aggiunta in un secondo momento (vedi `GOOGLE_MAPS_SETUP.md`)

---

## 🎉 COMPLETATO!

Se tutto funziona:
- ✅ Sito online su Vercel
- ✅ Form contatti salva su Supabase
- ✅ Mappa interattiva funzionante
- ✅ Video YouTube embed funzionante
- ✅ Smooth scroll navigation funzionante

---

## 🆘 TROUBLESHOOTING

### Mappa non carica
- Verifica che la Google Maps API key sia corretta su Vercel
- Controlla la console del browser (F12) per errori
- Verifica che le restrizioni API key includano `*.vercel.app/*`
- Attendi 10-15 secondi (la mappa può impiegare tempo a caricare)

### Form non invia
- Verifica le credenziali Supabase su Vercel (Settings → Environment Variables)
- Controlla che la migration SQL sia stata eseguita (Supabase → Table Editor)
- Verifica la console del browser (F12) per errori
- Controlla che le RLS policies siano attive (Supabase → Authentication → Policies)

### Build fallisce su Vercel
- Controlla i log di build su Vercel (clicca sul deployment fallito)
- Verifica che tutte le dipendenze siano in `package.json`
- Assicurati che non ci siano errori TypeScript
- Verifica che le variabili d'ambiente siano tutte e 3 presenti

### Logo non visibili
- Verifica che i file `logo-full.png` e `logo-z.png` siano in `public/`
- Controlla la console del browser per errori 404

---

## 📝 NOTE FINALI

- **Password Supabase**: Salvata in `.credentials.txt` (privata, non committata)
- **File di supporto**:
  - `SUPABASE_SETUP.sql` - SQL da eseguire
  - `CREDENZIALI_TEMPLATE.txt` - Template variabili
  - `SETUP_CHECKLIST.md` - Checklist completa
  - `GUIDA_PASSO_PASSO.md` - Questa guida

**Buon lavoro! 🚀**

