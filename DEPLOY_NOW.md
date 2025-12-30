# 🚀 Deploy Immediato - Gruppo Zisa

## ✅ Stato Preparazione

- ✅ Codice completo e pronto
- ✅ Supabase configurato e migration eseguita
- ✅ Credenziali Supabase pronte
- ✅ Componente Map semplificato (placeholder statico)
- ✅ Repository GitHub: `piuomenoweb/GRUPPOZISA`

---

## 📋 DEPLOY SU VERCEL - ISTRUZIONI RAPIDE

### STEP 1: Connetti GitHub a Vercel

1. Vai su: **https://vercel.com**
2. Accedi (puoi usare "Continue with GitHub")
3. Se è la prima volta, autorizza Vercel ad accedere a GitHub
4. Clicca **"Add New..."** → **"Project"**
5. Clicca **"Import Git Repository"**
6. Seleziona: **piuomenoweb/GRUPPOZISA**
7. Clicca **"Import"**

### STEP 2: Configura Progetto

1. **Project Name**: `gruppozisa` (o lascia default)
2. **Framework Preset**: Next.js (dovrebbe essere rilevato automaticamente)
3. **Root Directory**: `./` (default - lascia così)
4. **Build Command**: `npm run build` (default - lascia così)
5. **Output Directory**: `.next` (default - lascia così)

### STEP 3: Aggiungi Variabili d'Ambiente ⚠️ IMPORTANTE!

**PRIMA di cliccare "Deploy", DEVI aggiungere queste 2 variabili:**

1. Clicca su **"Environment Variables"** (sotto "Build and Output Settings")
2. Aggiungi una per una:

   **Variabile 1 - Supabase URL:**
   ```
   Name: NEXT_PUBLIC_SUPABASE_URL
   Value: https://xmocpmklgahbizblhtiu.supabase.co
   Environment: ✅ Production, ✅ Preview, ✅ Development
   ```
   Clicca **"Save"**

   **Variabile 2 - Supabase Key:**
   ```
   Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
   Value: sb_publishable_Of9FpsqMBIIoEjLUFaZztg_b2CB-JrJ
   Environment: ✅ Production, ✅ Preview, ✅ Development
   ```
   Clicca **"Save"**

3. **Verifica**: Dovresti vedere 2 variabili nella lista

### STEP 4: Deploy!

1. Clicca **"Deploy"** (in basso)
2. ⏳ Attendi 2-3 minuti per il build
3. ✅ Vercel ti darà un URL tipo: `https://gruppozisa-xxxxx.vercel.app`
4. Clicca sull'URL per aprire il sito

---

## ✅ Verifica Funzionamento

### 1. Controlla il Sito

Apri l'URL del sito Vercel e verifica:

- ✅ Logo visibili (hero e header)
- ✅ Video YouTube in autoplay (muted)
- ✅ Smooth scroll funziona (clicca sui link del menu)
- ✅ Sezione Terreni mostra placeholder e lista
- ✅ Form contatti visibile (sezione "Contatti")

### 2. Testa il Form Contatti

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

### 3. Verifica Sezione Terreni

1. Vai alla sezione "Terreni" (scroll o click menu)
2. Dovresti vedere:
   - Placeholder blu con icona pin e messaggio
   - 5 card con i terreni sotto
3. Clicca su una card → dovrebbe aprirsi un modale con:
   - Foto del terreno
   - Nome terreno
   - Descrizione
   - Superficie
   - Indirizzo
   - Bottone "Contattaci per Visita"
4. Clicca "Contattaci per Visita" → dovrebbe scrollare alla sezione Contatti

---

## 🎉 COMPLETATO!

Se tutto funziona:
- ✅ Sito online su Vercel
- ✅ Form contatti salva su Supabase
- ✅ Sezione terreni funzionante (placeholder + lista)
- ✅ Video YouTube embed funzionante
- ✅ Smooth scroll navigation funzionante

---

## 🆘 Troubleshooting

### Form non invia
- Verifica le credenziali Supabase su Vercel (Settings → Environment Variables)
- Controlla che la migration SQL sia stata eseguita (Supabase → Table Editor)
- Verifica la console del browser (F12) per errori
- Controlla che le RLS policies siano attive (Supabase → Authentication → Policies)

### Build fallisce su Vercel
- Controlla i log di build su Vercel (clicca sul deployment fallito)
- Verifica che tutte le dipendenze siano in `package.json`
- Assicurati che non ci siano errori TypeScript

### Logo non visibili
- Verifica che i file `logo-full.png` e `logo-z.png` siano in `public/`
- Controlla la console del browser per errori 404

---

## 📝 Prossimi Step (Futuro)

Quando sarai pronto:
- Vedi `GOOGLE_MAPS_SETUP.md` per aggiungere la mappa interattiva

---

**Credenziali Supabase salvate in**: `VERCEL_ENV_VARS.txt`

