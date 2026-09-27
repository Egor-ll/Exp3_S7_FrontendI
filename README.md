# El Amigo - eCommerce de Videojuegos y Accesorios

## Descripción

**El Amigo** es un sitio web de comercio electrónico orientado a la venta de videojuegos y accesorios para diferentes plataformas.

El proyecto fue desarrollado como parte de la asignatura **Desarrollo Frontend I**, incorporando componentes funcionales de React para construir una experiencia de compra interactiva.

La aplicación permite visualizar productos, aplicar filtros, agregar productos a un carrito de compras, eliminar productos y calcular automáticamente el total de la compra.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- React
- Vite
- Bootstrap 5
- JSON
- Git
- GitHub

---

## Funcionalidades

### Catálogo de productos

- Visualización de videojuegos y accesorios.
- Nombre del producto.
- Imagen.
- Descripción.
- Precio.
- Precio anterior cuando existe una oferta.
- Descuento aplicado cuando corresponde.

### Filtros

#### Videojuegos

- Búsqueda por nombre.
- Filtro por plataforma.

#### Accesorios

- Filtro por categoría.
- Mouse.
- Teclados.
- Audífonos.

### Carrito de compras

- Agregar productos.
- Eliminar productos.
- Limpiar el carrito.
- Contador de productos.
- Cálculo automático del total.
- Visualización del precio de cada producto.
- Minimizar y restaurar el carrito.
- Persistencia de los productos mediante `localStorage`.

### Interactividad

El proyecto utiliza eventos y estados de React para proporcionar una interfaz dinámica:

- `onClick`
- `onChange`
- `useState`
- `useEffect`
- Renderizado condicional.

---

## Componentes React

La aplicación utiliza componentes funcionales reutilizables:

```text
src/
├── components/
│   ├── Carrito.jsx
│   ├── Filtros.jsx
│   ├── ListaProductos.jsx
│   ├── Producto.jsx
│   └── ProductoCarrito.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx