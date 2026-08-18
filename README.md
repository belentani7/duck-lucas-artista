# Duck — Lucas, produtor musical e artista

Landing page editorial para **Lucas**, conocido artísticamente como **Duck**. El sitio presenta su trayectoria, créditos de portafolio, servicios de producción y canales de contacto desde Aracaju, con la conexión territorial Recife–Aracaju indicada por el artista.

## Dirección de producto

La experiencia sigue una dirección de archivo de artista: verde floresta, crema y verde-lima de señal; fotografía personal; tipografía compacta; y una composición que funciona como una ficha musical contemporánea. El lenguaje está escrito para una persona creadora, no para una empresa o un estudio genérico.

La biografía pública usada como base indica que Lucas comenzó en la música a los 12 años, estudió guitarra y teoría musical en el Conservatorio de Música de Sergipe entre los 14 y 16 años, aprendió a grabar y producir en casa a los 17, empezó a lanzar canciones a los 19 y compró su primer curso de producción en 2021. La fuente pública principal es [duck.46graus.com](https://duck.46graus.com/).

## Qué incluye

La página presenta el nombre artístico y el nombre real, la trayectoria autodidacta, el portafolio con créditos concretos, los servicios de instrumental, grabación, mixagem y masterização, el proceso de trabajo, el sitio oficial, Instagram, YouTube, correo, WhatsApp y un QR funcional. Los créditos enlazan a sus destinos públicos de YouTube o Spotify cuando están disponibles.

La comunicación no inventa testimonios, reseñas ni logos de clientes. Los créditos se muestran como información de portafolio y distinguen las funciones realizadas en cada trabajo.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Wouter
- Lucide React
- Manus WebDev static hosting

## Desarrollo local

```bash
pnpm install
pnpm dev
```

## Validación

```bash
pnpm check
pnpm build
```

## Estructura principal

```text
client/
  index.html
  src/
    App.tsx
    index.css
    pages/Home.tsx
ideas.md
research_duck.md
README.md
todo.md
```

Los activos oficiales de Duck y el QR se referencian por URLs permanentes del almacenamiento del proyecto. Las imágenes no se guardan dentro de `client/public`.
