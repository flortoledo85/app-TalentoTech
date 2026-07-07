# Optic Choices 👓

E-commerce de óptica desarrollado con React y Firebase como proyecto final del curso TalentoTech.

---

## 🛠️ Tecnologías utilizadas

- React 18
- Vite
- Firebase (Firestore + Authentication)
- React Router DOM
- React Bootstrap
- Lucide React
- React Icons

---

## 📋 Requisitos previos

- Node.js v18 o superior
- npm v9 o superior
- Cuenta en Firebase

---

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/app-TalentoTech.git
cd app-TalentoTech
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar Firebase

Creá un proyecto en [Firebase Console](https://console.firebase.google.com) y habilitá:
- **Firestore Database**
- **Authentication** (Email/Password)

Luego editá el archivo `src/firebase/config.js` con tus credenciales:

```js
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROJECT.firebaseapp.com",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_PROJECT.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};
```

### 4. Configurar reglas de Firestore

En Firebase Console → Firestore → Rules, pegá las siguientes reglas:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /products/{document} {
      allow read: if true;
      allow write: if request.auth != null &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.rol == 'admin';
    }
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 5. Crear usuario administrador

1. En Firebase Console → Authentication → Add user, creá un usuario con email y contraseña
2. Copiá el UID del usuario
3. En Firestore → Crear colección `users` → Agregar documento con el UID como ID y el campo:
   - `rol: "admin"`

### 6. Iniciar la aplicación

```bash
npm run dev
```

La app estará disponible en `http://localhost:5173`

---

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Cart/
│   ├── Contact/
│   ├── FormProduct/
│   ├── Home/
│   ├── Item/
│   ├── ItemList/
│   ├── ItemListContainer/
│   ├── Layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── Navbar.jsx
│   ├── Login/
│   ├── Management/
│   ├── Measurements/
│   ├── Pagination/
│   ├── ProductDetails/
│   ├── ProtectedRoute/
│   ├── Register/
│   ├── Spinner/
│   └── cards/
├── context/
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
│   └── SearchContext.jsx
├── firebase/
│   └── config.js
└── App.jsx
```

---

## ✨ Funcionalidades

- 🛍️ Catálogo de productos con búsqueda por nombre y categoria y paginación
- 🛒 Carrito de compras
- 🔐 Autenticación con Firebase
- 👑 Panel de administración (CRUD completo)
- 📱 Diseño responsive con menú hamburguesa
- 🎠 Carrusel de imágenes en la página de inicio
- 📞 Página de contacto con equipo y redes sociales

---

## 🧪 Compatibilidad

Probado en:
- ✅ Google Chrome
- ✅ Mozilla Firefox
- ✅ Microsoft Edge
- ✅ Mobile (Chrome Android)

---

## 👩‍💻 Desarrollado por

[Florencia Toledo] — TalentoTech 2026
