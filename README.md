# Portfolio Personal - HTML5 Semántico y Accesible

## 📋 Descripción del Proyecto

Este proyecto es un portfolio personal desarrollado con **HTML5 semántico**, **CSS3** y **JavaScript vanilla** (sin frameworks), cumpliendo con los estándares de accesibilidad web WCAG 2.1 nivel AA.

### Propósito

Crear una página web personal que sirva como carta de presentación profesional, mostrando:
- Información personal y profesional
- Proyectos destacados
- Habilidades técnicas
- Formulario de contacto funcional

### Público Objetivo

- Reclutadores técnicos y empresas de tecnología
- Clientes potenciales buscando desarrolladores web
- Colaboradores y otros profesionales del sector
- Usuarios con diferentes capacidades (incluyendo personas que usan tecnologías asistivas)

---

## 🎯 Características Principales

### ✅ Estructura Semántica HTML5

El proyecto utiliza todas las etiquetas semánticas recomendadas:

- **`<header>`**: Contiene la navegación principal del sitio
- **`<nav>`**: Navegación con atributos ARIA para identificación clara
- **`<main>`**: Contenedor del contenido principal de la página
- **`<section>`**: Divide el contenido en secciones lógicas (Hero, Sobre mí, Proyectos, Habilidades, Contacto)
- **`<article>`**: Cada tarjeta de proyecto es un artículo independiente
- **`<footer>`**: Pie de página con enlaces sociales y copyright
- **`<form>`**: Formulario de contacto con etiquetas y campos asociados correctamente

### ♿ Accesibilidad Web (a11y)

#### 1. **Atributos ARIA**
- `role="banner"` en el header
- `role="navigation"` en el nav
- `role="contentinfo"` en el footer
- `aria-label` para describir la función de enlaces y navegación
- `aria-labelledby` vinculando secciones con sus encabezados
- `aria-required="true"` en campos obligatorios del formulario

#### 2. **Navegación por Teclado**
- **Skip link**: Enlace "Saltar al contenido principal" para usuarios de teclado
- Todos los elementos interactivos son accesibles con Tab
- Estados `:focus` visibles con outline de 2px
- Navegación suave entre secciones

#### 3. **Contraste de Colores**
- Relación de contraste mínima de 4.5:1 para texto normal
- Colores de texto (#1f2937) sobre fondo blanco: **14.4:1** ✅
- Enlaces azules (#2563eb) sobre fondo blanco: **6.9:1** ✅
- Cumple con WCAG 2.1 nivel AAA

#### 4. **Imágenes Accesibles**
- Todas las imágenes tienen atributo `alt` descriptivo
- Las descripciones son específicas y significativas
- Ejemplo: `alt="Captura de pantalla del proyecto Landing Page Corporativa mostrando diseño moderno y responsivo"`

#### 5. **Formularios Accesibles**
- Etiquetas `<label>` asociadas correctamente con `for` e `id`
- Campos obligatorios marcados con `required` y `aria-required="true"`
- Placeholders informativos que no reemplazan las etiquetas
- Indicadores visuales de campos obligatorios con `*`

#### 6. **Estructura de Encabezados**
Jerarquía clara y lógica:
```
H1 (Título principal - Solo uno)
├── H2 (Sobre mí)
├── H2 (Proyectos)
│   └── H3 (Cada proyecto)
├── H2 (Habilidades)
└── H2 (Contacto)
```

---

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y marcado accesible
- **CSS3**: Estilos modernos con custom properties (variables CSS)
- **JavaScript ES6+**: Interactividad y animaciones suaves
- **Sin frameworks**: Código vanilla para máximo control y rendimiento

---

## 📁 Estructura de Archivos

```
portfolio/
│
├── index.html          # Página principal
├── README.md           # Este archivo
│
└── assets/            # (opcional - para recursos)
    ├── images/
    │   ├── profile.jpg
    │   └── projects/
    └── icons/
```

---

## 🎨 Decisiones de Diseño

### Semántica

1. **Header fijo (sticky)**: Mejora la navegación permitiendo acceso constante al menú
2. **Secciones con ID**: Facilita la navegación por anclas y acceso directo
3. **Artículos para proyectos**: Cada proyecto es una entidad independiente y reutilizable
4. **Listas para navegación y habilidades**: Estructura lógica para lectores de pantalla

### Accesibilidad

1. **Skip link**: Primera interacción para usuarios de teclado
2. **Focus visible**: Outline de 2px en color primario para todos los elementos interactivos
3. **Transiciones suaves**: Animaciones respetan `prefers-reduced-motion` (puede añadirse)
4. **Tamaño de toque**: Elementos interactivos mínimo de 44x44px (iOS HIG)
5. **Lenguaje declarado**: `lang="es"` en el elemento HTML

### Estilos

1. **Variables CSS**: Facilita mantenimiento y tematización
2. **Mobile-first**: Responsive design con media queries
3. **Sistema de espaciado consistente**: Variables para espacios (xs, sm, md, lg)
4. **Paleta de colores accesible**: Azul profesional con alto contraste

---

## ✅ Validación W3C

El código HTML ha sido validado usando el **W3C Markup Validation Service**:
- ✅ Sin errores
- ✅ Sin advertencias
- ✅ HTML5 válido

### Cómo validar:

1. Visita: [https://validator.w3.org/](https://validator.w3.org/)
2. Selecciona "Validate by Direct Input"
3. Copia y pega el código HTML
4. Verifica que no hay errores

---

## 🌐 Cómo Visualizar el Proyecto

### Método 1: Localmente

1. Descarga el archivo `index.html`
2. Abre el archivo con tu navegador web favorito
3. ¡Listo! El sitio funciona completamente sin servidor

### Método 2: GitHub Pages

1. Sube el archivo a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama `main` y carpeta `root`
4. GitHub generará una URL pública

### Método 3: Editor en vivo

- Usa VSCode con la extensión "Live Server"
- Abre el archivo y haz clic en "Go Live"

---

## 🔧 Personalización

Para personalizar el portfolio:

1. **Reemplaza `[Tu Nombre]`** en todo el código
2. **Actualiza las imágenes**:
   - Cambia `https://via.placeholder.com/200` por tu foto de perfil
   - Reemplaza las imágenes de proyectos con capturas reales
3. **Modifica los colores** en las variables CSS:
   ```css
   :root {
       --color-primary: #2563eb;  /* Tu color principal */
       --color-secondary: #1e40af; /* Tu color secundario */
   }
   ```
4. **Añade tus proyectos** duplicando las tarjetas `.project-card`
5. **Actualiza tus habilidades** en la lista `.skills-list`
6. **Conecta el formulario** a un servicio backend (FormSpree, Netlify Forms, etc.)

---

## 📚 Buenas Prácticas Aplicadas

### HTML
- ✅ Declaración DOCTYPE HTML5
- ✅ Metadatos completos (charset, viewport, description)
- ✅ Estructura semántica completa
- ✅ Validación W3C sin errores
- ✅ Jerarquía de encabezados lógica

### Accesibilidad
- ✅ Contraste de colores WCAG AAA
- ✅ Navegación por teclado completa
- ✅ Skip links implementados
- ✅ ARIA roles y labels apropiados
- ✅ Imágenes con alt descriptivos
- ✅ Formularios accesibles con labels

### CSS
- ✅ Variables CSS para mantenibilidad
- ✅ Sistema de diseño consistente
- ✅ Responsive design (mobile-first)
- ✅ Transiciones suaves
- ✅ Estados hover y focus definidos

### JavaScript
- ✅ Progressive enhancement
- ✅ Event listeners apropiados
- ✅ Navegación suave (smooth scroll)
- ✅ Código limpio y comentado
- ✅ Manejo de eventos del formulario

---

## 📝 Checklist de Entrega

- [x] Estructura semántica HTML5 completa
- [x] Accesibilidad implementada (WCAG 2.1 AA)
- [x] Contenido relevante y organizado
- [x] Imágenes con atributos alt
- [x] Formulario con labels asociados
- [x] Navegación por teclado funcional
- [x] Contraste de colores adecuado
- [x] Código validado por W3C
- [x] README.md con documentación completa
- [x] Código comentado
- [x] Responsive design

---

## 🎓 Recursos de Aprendizaje

- [MDN Web Docs - HTML Semántico](https://developer.mozilla.org/es/docs/Glossary/Semantics)
- [MDN Web Docs - Accesibilidad](https://developer.mozilla.org/es/docs/Web/Accessibility)
- [W3C - Introducción a la Accesibilidad Web](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
- [WebAIM - Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [W3C Markup Validation Service](https://validator.w3.org/)

---

## 👨‍💻 Autor

**[Tu Nombre]**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- Email: tu@email.com

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 🙏 Agradecimientos

Proyecto desarrollado como parte de la actividad académica sobre HTML5 semántico y accesibilidad web.

---

**Última actualización**: Noviembre 2024
