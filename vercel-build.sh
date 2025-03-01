#!/bin/bash

# Çıktı klasörünü oluştur
mkdir -p dist

# HTML dosyalarını kopyala
cp index.html dist/
cp nasil-kullanilir.html dist/

# CSS dosyalarını kopyala
mkdir -p dist/css
cp -r public/css/* dist/css/

# Diğer statik dosyaları kopyala
cp -r public/* dist/ 2>/dev/null || :

echo "Static build tamamlandı!" 