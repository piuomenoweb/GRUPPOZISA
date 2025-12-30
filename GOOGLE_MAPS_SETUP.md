# 🗺️ Setup Google Maps - Step 2 (Futuro)

## Nota

La mappa interattiva verrà implementata in un secondo momento. Per ora il sito funziona con un placeholder statico che mostra la lista dei terreni.

---

## Quando sarai pronto per aggiungere Google Maps

### STEP 1: Crea Progetto Google Cloud

1. Vai su: **https://console.cloud.google.com**
2. Clicca sul menu a tendina in alto (dove c'è il nome progetto)
3. Clicca **"New Project"**
4. Nome: `gruppozisa-maps`
5. Clicca **"Create"**
6. Seleziona il progetto appena creato dal menu a tendina

### STEP 2: Abilita Maps JavaScript API

1. Vai su **"APIs & Services"** → **"Library"** (menu sinistro)
2. Cerca nella barra di ricerca: **"Maps JavaScript API"**
3. Clicca su **"Maps JavaScript API"**
4. Clicca **"Enable"**
5. ⏳ Attendi qualche secondo

### STEP 3: Crea API Key

1. Vai su **"APIs & Services"** → **"Credentials"** (menu sinistro)
2. Clicca **"Create Credentials"** (in alto) → **"API Key"**
3. **COPIA LA CHIAVE** generata (inizia con `AIza...`)
4. ⚠️ **NON chiudere ancora questa pagina!**

### STEP 4: Configura Restrizioni (IMPORTANTE!)

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
5. **Salva la chiave** (la userai su Vercel)

### STEP 5: Aggiungi Variabile su Vercel

1. Vai su Vercel → Il tuo progetto → **Settings** → **Environment Variables**
2. Aggiungi nuova variabile:
   - Name: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
   - Value: (incolla la Google Maps API key)
   - Environment: ✅ Production, ✅ Preview, ✅ Development
3. Clicca **"Save"**
4. Vai su **Deployments** → Clicca sui 3 puntini del deployment più recente → **Redeploy**

### STEP 6: Verifica

1. Apri il sito su Vercel
2. Vai alla sezione "Terreni"
3. La mappa dovrebbe caricare e mostrare i 5 pin con la "Z"
4. Clicca su un pin → dovrebbe aprirsi il modale

---

## Note Tecniche

Il componente `Map.tsx` è già configurato per:
- ✅ Caricare Google Maps quando la chiave API è disponibile
- ✅ Mostrare un placeholder quando la chiave non è presente
- ✅ Gestire errori di caricamento
- ✅ Mostrare marker personalizzati con icona "Z"

Basta aggiungere la variabile d'ambiente su Vercel e fare un redeploy!

---

**File da modificare**: Nessuno - il codice è già pronto! 🎉

