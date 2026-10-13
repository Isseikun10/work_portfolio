<div align="center">

# 🚀 Portafolio Personal | Edwin Bonilla

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-06b6d4.svg)](https://opensource.org/licenses/MIT)

**Portafolio profesional desarrollado con React, Vite y Tailwind CSS.**  
Estética de desarrollador, animaciones fluidas y diseño 100% responsive.

[🌐 Demo en vivo](https://work-portfolio-ashy.vercel.app/) · [💼 LinkedIn](https://www.linkedin.com/in/edwin-bonilla-dolores/) · [📧 Contacto](mailto:edwindolore19@outlook.com)

</div>

---

## 📖 Sobre el proyecto

¡Hola! Bienvenido a mi portafolio profesional. Aquí encontrarás un resumen de mis habilidades técnicas, proyectos destacados, certificaciones y trayectoria profesional como **Ingeniero en Sistemas Computacionales** especializado en **Desarrollo Fullstack**.

Este sitio fue diseñado y construido desde cero con un enfoque en la **experiencia de usuario**, el **rendimiento** y la **accesibilidad**, aplicando buenas prácticas de desarrollo moderno.

---

## ✨ Características principales

- 📱 **Diseño completamente responsivo** — Adaptado a móviles, tablets y escritorio.
- 🧩 **Secciones bien estructuradas** — Sobre mí, experiencia, portafolio, cursos y contacto.
- 🖥️ **Estética de desarrollador** — Ventanas tipo terminal/IDE, etiquetas en fuente monoespaciada (`<skills />`, `const nombre =`) y detalles de código en toda la interfaz.
- 🪟 **Glassmorphism** — Tarjetas translúcidas con `backdrop-blur`, bordes sutiles y glows de fondo.
- 🎞️ **Animaciones fluidas** — Framer Motion para revelar secciones, contadores animados y menú móvil; respeta `prefers-reduced-motion`.
- 🔎 **Filtros por categoría** — Cursos y certificados filtrables (Web, Cloud y Redes, IA y Python, Académico).
- 🖼️ **Modal de certificados** — Visualización ampliada de diplomas, con cierre por `Esc` o clic fuera.
- 🧭 **Navegación con scroll-spy** — El menú resalta la sección visible.
- ♿ **Accesibilidad** — Foco visible, `aria-label`, listas semánticas, enlace para saltar al contenido y formularios con `label`.
- ⚡ **Rendimiento** — Vite como build tool, carga diferida (`lazy`) de las secciones bajo el pliegue e imágenes con `loading="lazy"`.
- ✉️ **Formulario de contacto** — Envío sin recargar la página, con estados de carga, éxito y error.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Propósito |
|------------|-----------|
| **React 18** | Interfaz de usuario basada en componentes |
| **Vite** | Entorno de desarrollo y build ultrarrápido |
| **Tailwind CSS 4** | Estilizado utility-first, con tokens definidos en `@theme` |
| **Framer Motion** | Animaciones modernas y transiciones fluidas |
| **React Icons** | Iconografía técnica (Devicons, Simple Icons, Font Awesome, Feather) |
| **React Type Animation** | Efecto de máquina de escribir en el Hero |
| **React Scroll** | Navegación suave y scroll-spy entre secciones |
| **Getform** | Recepción de los mensajes del formulario de contacto |
| **Vercel** | Despliegue continuo y hosting |

---

## 📂 Estructura del proyecto

```text
src/
├── assets/                # Imágenes, CV y recursos estáticos
│   ├── Course/            # Certificados e imágenes de cursos
│   ├── Curriculum/        # CV en PDF
│   ├── Project/           # Capturas de proyectos
│   └── profpic.png        # Foto de perfil
├── components/
│   ├── Navbar.jsx         # Barra de navegación con scroll-spy y menú móvil
│   ├── Hero.jsx           # Presentación, redes y stack principal
│   ├── Skills.jsx         # Habilidades técnicas por categoría
│   ├── Experience.jsx     # Trayectoria profesional en formato timeline
│   ├── Portfolio.jsx      # Proyectos destacados
│   ├── Courses.jsx        # Cursos y certificados con filtros y modal
│   ├── Contact.jsx        # Acerca de + formulario de contacto
│   ├── Footer.jsx         # Pie de página con redes sociales
│   ├── Reveal.jsx         # Animación reutilizable al hacer scroll
│   └── ShinyEffect.jsx    # Glow decorativo de fondo
├── App.jsx                # Componente raíz (carga diferida de secciones)
├── main.jsx               # Punto de entrada
└── index.css              # Estilos globales y tokens del tema
```

---

## 📦 Instalación y uso

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/Isseikun10/work-portfolio.git
cd work-portfolio
```

### 2️⃣ Instalar dependencias

```bash
npm install
# o si usas yarn:
yarn install
```

### 3️⃣ Iniciar el servidor de desarrollo

```bash
npm run dev
# o:
yarn dev
```

### 4️⃣ Generar la versión de producción

```bash
npm run build
```

---

## 🎨 Personalización del tema

Los colores y fuentes se definen como tokens en `src/index.css`, así que puedes cambiar la paleta completa desde un solo lugar:

```css
@theme {
    --font-sans: "Montserrat", ui-sans-serif, system-ui, sans-serif;
    --font-mono: "JetBrains Mono", ui-monospace, monospace;

    --color-ink: #070b14;        /* Fondo principal */
    --color-primary: #06b6d4;    /* Acento (cian) */
    --color-secondary: #7c3aed;  /* Acento secundario (violeta) */
}
```

Utilidades propias disponibles:

- `text-gradient` — texto con degradado cian → violeta.
- `bg-primary-color` — fondo en degradado para botones principales.

> 💡 Los estilos globales (`body`, `h2`, `p`…) van dentro de `@layer base` para no sobrescribir las utilidades de Tailwind.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**.  
Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 💬 Contacto y redes

¿Te gustó el proyecto o quieres colaborar? ¡Conectemos!

<div align="center">

[![Email](https://img.shields.io/badge/Email-edwindolore19@outlook.com-06b6d4?logo=microsoft-outlook&logoColor=white)](mailto:edwindolore19@outlook.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Edwin_Bonilla_Dolores-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/edwin-bonilla-dolores/)
[![GitHub](https://img.shields.io/badge/GitHub-Isseikun10-181717?logo=github&logoColor=white)](https://github.com/Isseikun10)
[![GitLab](https://img.shields.io/badge/GitLab-EdwinCS1-FC6D26?logo=gitlab&logoColor=white)](https://gitlab.com/EdwinCS1)
[![Instagram](https://img.shields.io/badge/Instagram-@edwindolorez-E4405F?logo=instagram&logoColor=white)](https://www.instagram.com/edwindolorez/)

</div>

<div align="center">

### ⭐ ¡Gracias por tu visita!

Si este portafolio te parece útil o inspirador, no dudes en dejar una estrella en el repositorio.  
¡Toda retroalimentación es bienvenida!

Hecho con ❤️ por **Edwin Bonilla Dolores**

</div>
