function ProductoCarrito({ producto, onEliminar }) {
    return (
        <article className="producto-carrito-react">
            <span>
                {producto.nombre}
            </span>

            <strong>
                {producto.precioOferta || producto.precio}
            </strong>

            <button
                type="button"
                onClick={onEliminar}
            >
                Eliminar
            </button>
        </article>
    )
}

export default ProductoCarrito