# Grupo Meinsal

Landing page institucional desarrollada para **Grupo Meinsal**, una empresa orientada a servicios de mantenimiento industrial y fabricación de piezas y componentes para la industria salvadoreña.

El proyecto fue desarrollado utilizando **Next.js 16+**, **App Router** y **Supabase** como servicio backend/serverless para la gestión y consulta de datos.

---

## Tecnologías utilizadas

- Next.js 16+
- React
- TypeScript
- App Router
- Tailwind CSS
- Supabase
- PostgreSQL
- Vercel
- Git / GitHub

---

## Descripción del proyecto

El sitio web presenta una landing page institucional para Grupo Meinsal, incluyendo información sobre sus servicios y proyectos industriales.

La aplicación utiliza Supabase para almacenar y consultar la información mostrada dinámicamente en el sitio.

Entre las funcionalidades principales se encuentran:

- Landing page responsive.
- Sección de servicios.
- Sección de proyectos destacados.
- Datos almacenados en Supabase.
- Lectura de datos desde Server Components.
- Rutas dinámicas para servicios.
- Rutas dinámicas para proyectos.
- Manejo de estados de carga.
- Manejo de errores.
- Página personalizada para contenido no encontrado.
- Row Level Security (RLS) configurado en Supabase.
- Variables de entorno para la conexión con Supabase.

---

## Arquitectura

La aplicación utiliza el **App Router de Next.js**.

Las principales rutas dinámicas son:

```text
/servicios/[slug]
/proyectos/[id]


/servicios/mantenimiento-industrial
/servicios/fabricacion-de-piezas
/servicios/soldadura-industrial

/proyectos/1
/proyectos/2
/proyectos/3

Base de datos

El proyecto utiliza Supabase como backend serverless y PostgreSQL como base de datos.

Se crearon dos tablas principales:

services

Contiene la información de los servicios ofrecidos.

Campos principales:

id
title
slug
description
category
image_url
featured
created_at
projects

Contiene la información de los proyectos destacados.

Campos principales:

id
title
slug
description
category
image_url
featured
created_at

Cada tabla contiene registros de ejemplo utilizados para demostrar el funcionamiento de la aplicación

Estructura del proyecto
grupo-meinsal/
│
├── src/
│   ├── app/
│   │   ├── servicios/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── proyectos/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   └── lib/
│       └── supabase/
│           └── server.ts
│
├── public/
│
├── .env.local
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md