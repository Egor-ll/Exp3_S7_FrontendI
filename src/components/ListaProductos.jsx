import Producto from './Producto'

function ListaProductos({ productos, onAgregar }) {
    return (
        <div className="productos-grid-react">
            {productos.map((producto) => (
                <Producto
                    key={producto.id}
                    producto={producto}
                    onAgregar={onAgregar}
                />
            ))}
        </div>
    )
}

export default ListaProductos