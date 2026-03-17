# Limón Digital — demo-landing

Landing page de Limón Digital construida con **Astro + Tailwind CSS**.
Sirve como plantilla base para las landing pages que se ofrecen a clientes.

## Stack

- [Astro](https://astro.build) — framework principal
- [Tailwind CSS](https://tailwindcss.com) — utilidades de estilo
- [Syne](https://fonts.google.com/specimen/Syne) — tipografía de títulos
- [DM Sans](https://fonts.google.com/specimen/DM+Sans) — tipografía de cuerpo

## Setup inicial

```bash
# 1. Instala Astro (solo la primera vez, sobreescribe proyecto anterior)
npm create astro@latest . -- --template minimal --typescript strict --install --no-git

# 2. Agrega Tailwind
npx astro add tailwind -y

# 3. Copia los archivos de este zip al proyecto
# (reemplaza src/ y public/ con el contenido del zip)

# 4. Levanta el servidor de desarrollo
npm run dev
```

## Estructura

```
src/
├── layouts/
│   └── BaseLayout.astro
├── components/
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── Servicios.astro
│   ├── PorQueNosotros.astro
│   ├── Precios.astro
│   ├── SobreNosotros.astro
│   ├── Contacto.astro
│   └── Footer.astro
├── styles/
│   └── global.css
└── pages/
    └── index.astro
public/
└── favicon.svg
```

## Paleta de colores

| Color | Hex | Uso |
|-------|-----|-----|
| Verde limón | `#C4E538` | Acento principal |
| Gris oscuro | `#2F2F2F` | Fondo |
| Oscuro 2 | `#1a1a1a` | Secciones alternas |
| Blanco | `#FFFFFF` | Texto principal |

## Uso como plantilla

Para adaptar esta landing a un cliente nuevo:
1. Duplica el repo
2. Reemplaza textos, colores y logo en los componentes correspondientes
3. Ajusta los precios en `Precios.astro`
4. Conecta el formulario de contacto a un servicio (Formspree, Resend, etc.)
5. Deploy en Vercel con `git push`
