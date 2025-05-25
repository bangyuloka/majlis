# Setup Tailwind CSS di Node.js Project (majlis)

## 1️⃣ Install Tailwind CSS
```
npm install -D tailwindcss
npx tailwindcss init
```

## 2️⃣ Jalankan Tailwind CLI
```
npx tailwindcss -i ./public/assets/css/style.css -o ./public/assets/css/output.css --watch
```

## 3️⃣ Update index.html untuk load output.css
```html
<link rel="stylesheet" href="assets/css/output.css">
```

## 4️⃣ Jalankan server.js
```
node server.js
```

## 5️⃣ Buka browser
```
http://localhost:3000
```

Enjoy your project! 🚀
