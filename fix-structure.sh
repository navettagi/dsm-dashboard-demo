# Script per correggere la struttura del progetto Next.js

# 1. Pulire la struttura duplicata
rm globals.css
rm tailwind.config.js
rm -rf src/app

# 2. Creare la corretta struttura delle cartelle
mkdir -p app/(dashboard)/ai-query
mkdir -p app/(dashboard)/connect-demo
mkdir -p app/(dashboard)/core-demo
mkdir -p app/(dashboard)/insight-demo
mkdir -p app/(dashboard)/insight-demo-ai
mkdir -p app/(dashboard)/ops-demo

# 3. Spostare i file nella posizione corretta
mv page.tsx app/page.tsx
mv layout.tsx app/layout.tsx
mv ai-query/page.tsx app/(dashboard)/ai-query/page.tsx
mv connect-demo/page.tsx app/(dashboard)/connect-demo/page.tsx
mv core-demo/page.tsx app/(dashboard)/core-demo/page.tsx
mv insight-demo/page.tsx app/(dashboard)/insight-demo/page.tsx
mv insight-demo-ai/page.tsx app/(dashboard)/insight-demo-ai/page.tsx
mv ops-demo/page.tsx app/(dashboard)/ops-demo/page.tsx

# 4. Spostare i file di configurazione
mv fonts app/fonts/
mv components app/components/
mv lib app/lib/

# La struttura corretta dovrebbe essere:
# app/
# ├── (dashboard)
# │   ├── ai-query
# │   │   └── page.tsx
# │   ├── connect-demo
# │   │   └── page.tsx
# │   ├── core-demo
# │   │   └── page.tsx
# │   ├── insight-demo
# │   │   └── page.tsx
# │   ├── insight-demo-ai
# │   │   └── page.tsx
# │   └── ops-demo
# │       └── page.tsx
# ├── components
# ├── fonts
# ├── globals.css
# ├── layout.tsx
# ├── lib
# └── page.tsx