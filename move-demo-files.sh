#!/bin/bash

# Mappatura dei file sorgente con le loro destinazioni
FILES_TO_MOVE=(
    "6-dsm-ai-query.tsx:app/(dashboard)/ai-query/page.tsx"
    "3-dsm-connect-demo.tsx:app/(dashboard)/connect-demo/page.tsx"
    "1-dsm-core-demo.tsx:app/(dashboard)/core-demo/page.tsx"
    "5-dsm-insight-demo.tsx:app/(dashboard)/insight-demo/page.tsx"
    "2-dsm-insight-demo-ai.tsx:app/(dashboard)/insight-demo-ai/page.tsx"
    "4-dsm-ops-demo.tsx:app/(dashboard)/ops-demo/page.tsx"
)

# Sposta ogni file nella sua destinazione
for MAPPING in "${FILES_TO_MOVE[@]}"; do
    SOURCE="${MAPPING%%:*}"
    DEST="${MAPPING##*:}"
    
    if [ -f "$SOURCE" ]; then
        echo "Spostamento di $SOURCE in $DEST"
        cp "$SOURCE" "$DEST"
    else
        echo "File $SOURCE non trovato"
    fi
done

echo "Operazione completata. Verifica i file con 'tree app/(dashboard)'"