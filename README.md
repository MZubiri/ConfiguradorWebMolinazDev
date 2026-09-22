# 🌟 Molinaz Dev - Catálogo Comercial de Demos Turísticas

Plataforma interactiva (Showcase Hub) diseñada para que el equipo comercial y de ventas de **Molinaz Dev** presente soluciones y páginas web de turismo ante clientes potenciales, con filtros en tiempo real, visor responsivo de dispositivos y botones de cotización directa por WhatsApp.

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Generar build de producción (archivos estáticos listos para subir a cualquier hosting/cPanel/Vercel):**
   ```bash
   npm run build
   ```

---

## ➕ ¿Cómo agregar una nueva demo en 2 minutos?

Toda la información del catálogo está completamente desacoplada de la interfaz. Para añadir una nueva demo, solo debes abrir el archivo:

📁 `src/data/demos.js`

Y agregar un nuevo objeto dentro del array `demosData`:

```javascript
{
  id: "nueva-demo",
  name: "Nombre de la Agencia o Demo",
  category: "aventura", // Opciones: 'vivencial', 'aventura', 'receptivo', 'lujo'
  categoryLabel: "Aventura & Actividades",
  badge: "🚵‍♂️ Cicloturismo & Rutas",
  location: "Cusco & Valle Sagrado",
  url: "https://tudemo.molinazdev.lat/",
  tagline: "Breve descripción comercial de impacto en una línea.",
  description: "Descripción detallada del modelo web y a quién va dirigido.",
  salesPitch: [
    "Punto de venta 1 que el vendedor puede leer al cliente",
    "Punto de venta 2 (ej. integración con pasarela de pagos)",
    "Punto de venta 3 (ej. reserva instantánea por WhatsApp)"
  ],
  features: [
    "WhatsApp 1-Click",
    "Catálogo de Circuitos",
    "Itinerario 3D",
    "Multi-idioma"
  ],
  themeColors: {
    primary: "#C85A32",
    accent: "#D4A853",
    badgeBg: "rgba(200, 90, 50, 0.9)",
    badgeBorder: "#D4A853"
  },
  techStack: "Angular / Next.js / Clean CSS",
  idealFor: "Operadores de tours en bicicleta y deportes de aventura.",
  previewImage: "https://tu-imagen-o-enlace.jpg"
}
```

¡Eso es todo! El catálogo actualizará de inmediato:
- Las tarjetas de visualización.
- Los filtros por categoría y contadores numéricos.
- La búsqueda predictiva en tiempo real.
- El visor interactivo de dispositivos (Desktop, Tablet, Móvil).
- Los botones de cotización por WhatsApp con el mensaje personalizado.

---

## 📱 Demos Actualmente Incluidas

1. **Valle del Sondondo Expeditions** (`https://sondondo.molinazdev.lat/`) — Ecoturismo & Vivencial
2. **Cabalgatas Kgoriwayra** (`https://kgoriwayra.molinazdev.lat/`) — Aventura & Actividades
3. **MaxisTravel Cusco** (`https://maxistravel.com/`) — Receptivo & Paquetes
4. **GoTravel México** (`https://toursgotravel.com/es`) — Lujo & Destinos de Playa

---

## 🛠️ Tecnologías Utilizadas

- **Vite** para desarrollo y empaquetado ultra rápido.
- **HTML5 Semántico** con soporte nativo para `<dialog>` y microdatos.
- **CSS Moderno**: Variables CSS (Custom Properties), Glassmorphism, CSS Grid, Flexbox y Container Queries.
- **JavaScript ES Modules** modular y libre de dependencias pesadas.
- **Lucide Icons** para iconografía moderna y ligera.
