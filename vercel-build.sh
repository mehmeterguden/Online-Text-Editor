#!/bin/bash

# Bağımlılıkları yükle
npm install

# Projeyi build et
npm run build

# CSS dosyalarının doğru konumda olduğundan emin ol
mkdir -p dist/css
cp -r public/css/* dist/css/

# HTML dosyalarını kopyala
cp index.html dist/
cp nasil-kullanilir.html dist/nasil-kullanilir.html

echo "Build tamamlandı!" 