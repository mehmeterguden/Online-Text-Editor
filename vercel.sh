#!/bin/bash

# Bu script Vercel tarafından otomatik olarak çalıştırılır

# Çıktı klasörünü oluştur
mkdir -p .vercel/output/static

# HTML dosyalarını kopyala
cp index.html .vercel/output/static/
cp nasil-kullanilir.html .vercel/output/static/

# CSS dosyalarını kopyala
mkdir -p .vercel/output/static/css
cp -r public/css/* .vercel/output/static/css/

# Diğer statik dosyaları kopyala
cp -r public/* .vercel/output/static/ 2>/dev/null || :

# Vercel yapılandırma dosyasını oluştur
cat > .vercel/output/config.json << EOF
{
  "version": 3,
  "routes": [
    { "handle": "filesystem" },
    { "src": "/nasil-kullanilir", "dest": "/nasil-kullanilir.html" },
    { "src": "/c-compiler", "dest": "/index.html" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
EOF

echo "Vercel build tamamlandı!" 