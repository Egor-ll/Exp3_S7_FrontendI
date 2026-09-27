function Producto({ producto, onAgregar }) {
    return (
        <article className="producto-react">
            <img
                src={producto.imagen}
                alt={producto.nombre}
            />

            <h3>
                {producto.nombre}
            </h3>

            <p>
                {producto.descripcion}
            </p>

            {producto.precioAnterior && (
                <p>
                    <del>
                        {producto.precioAnterior}
                    </del>
                </p>
            )}

            {producto.descuento && (
                <span className="descuento-react">
                    {producto.descuento}
                </span>
            )}

            <strong>
                {producto.precioOferta || producto.precio}
            </strong>

            <button
                type="button"
                onClick={() => onAgregar(producto)}>
                🛒 Agregar al carrito
            </button>
        </article>
    )
}

export default Producto