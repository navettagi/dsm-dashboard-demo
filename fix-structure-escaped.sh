#!/bin/bash

# 1. Pulire la struttura duplicata
rm -f globals.css
rm -f tailwind.config.js
rm -rf src/app

# 2. Creare la corretta struttura delle cartelle
mkdir -p "app/(dashboard)/ai-query"
mkdir -p "app/(dashboard)/connect-demo"
mkdir -p "app/(dashboard)/core-demo"
mkdir -p "app/(dashboard)/insight-demo"
mkdir -p "app/(dashboard)/insight-demo-ai"
mkdir -p "app/(dashboard)/ops-demo"

# 3. Spostare i file nella posizione corretta
[ -f page.tsx ] && mv page.tsx app/page.tsx
[ -f layout.tsx ] && mv layout.tsx app/layout.tsx
[ -f ai-query/page.tsx ] && mv ai-query/page.tsx "app/(dashboard)/ai-query/page.tsx"
[ -f connect-demo/page.tsx ] && mv connect-demo/page.tsx "app/(dashboard)/connect-demo/page.tsx"
[ -f core-demo/page.tsx ] && mv core-demo/page.tsx "app/(dashboard)/core-demo/page.tsx"
[ -f insight-demo/page.tsx ] && mv insight-demo/page.tsx "app/(dashboard)/insight-demo/page.tsx"
[ -f insight-demo-ai/page.tsx ] && mv insight-demo-ai/page.tsx "app/(dashboard)/insight-demo-ai/page.tsx"
[ -f ops-demo/page.tsx ] && mv ops-demo/page.tsx "app/(dashboard)/ops-demo/page.tsx"

# 4. Spostare i file di configurazione
[ -d fonts ] && mv fonts app/fonts/
[ -d components ] && mv components app/components/
[ -d lib ] && mv lib app/lib/

echo "Script completato. Verifica la struttura con 'tree app'"