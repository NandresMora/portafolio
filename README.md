# Andrés Mora Mateus - Portafolio Profesional

![Versión](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-16.1-000000?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwind-css&logoColor=white)

Portafolio personal de desarrollo web y soporte TI, construido con tecnologías modernas para asegurar alto rendimiento, escalabilidad y un diseño responsivo.

## 🚀 Tecnologías

Este proyecto está construido con un stack moderno de frontend:

- **Framework:** [Next.js 16](https://nextjs.org/)
- **Librería UI:** [React 19](https://react.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Componentes:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Iconos:** [Lucide React](https://lucide.dev/)

## 📂 Estructura del Proyecto

El código fuente está organizado para ser modular y mantenible:

```text
src/
├── app/
│   ├── globals.css          # Estilos globales y variables
│   ├── layout.tsx           # Layout principal y configuración de metadatos SEO
│   └── page.tsx             # Ensamblador de la landing page
├── components/
│   ├── portfolio/           # Componentes específicos del portafolio
│   │   ├── data.ts          # Centralización de datos (experiencia, proyectos, etc.)
│   │   ├── ui-shared.tsx    # Componentes UI reutilizables del portafolio
│   │   ├── HeroSection.tsx  # Sección principal (Hero)
│   │   ├── ProjectsSection.tsx # Lista de proyectos destacados
│   │   └── ...              # Otras secciones (Skills, Experiencia, Contacto)
│   └── ui/                  # Componentes base de shadcn/ui
```

## 🛠️ Instalación y Uso Local

Para correr este portafolio en tu máquina local, sigue estos pasos:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/NandresMora/tu-repo.git
   cd tu-repo
   ```

2. **Instalar dependencias**
   Puedes usar `npm`, `yarn` o `bun`.
   ```bash
   npm install
   # o
   bun install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npx next dev -p 3000
   ```

4. **Visualizar el sitio**
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## ⚙️ Compilación para Producción

Para compilar la aplicación para entornos de producción:

```bash
npx next build
```

## 🌐 Despliegue Configurado

El proyecto está configurado con `output: "standalone"` en `next.config.ts`, lo que optimiza el tamaño del bundle generado y facilita el despliegue en contenedores Docker o plataformas de hosting modernas (Vercel, Railway, Render).

---
*Desarrollado por [Andrés Mora Mateus](https://github.com/NandresMora).*
