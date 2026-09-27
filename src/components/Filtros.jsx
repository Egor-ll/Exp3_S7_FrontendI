function Filtros({
                     catalogo,
                     busqueda,
                     plataforma,
                     categoria,
                     onBusquedaChange,
                     onPlataformaChange,
                     onCategoriaChange,
                     onLimpiar
                 }) {
    if (catalogo === 'juegos') {
        return (
            <form
                className="filtros-react"
                onSubmit={(event) => event.preventDefault()}>
                <div className="filtro-react">
                    <label htmlFor="buscador-react">
                        Buscar juego
                    </label>

                    <input
                        id="buscador-react"
                        type="text"
                        value={busqueda}
                        onChange={(event) =>
                            onBusquedaChange(event.target.value)
                        }
                        placeholder="Buscar por nombre..."
                    />
                </div>

                <div className="filtro-react">
                    <label htmlFor="plataforma-react">
                        Plataforma
                    </label>

                    <select
                        id="plataforma-react"
                        value={plataforma}
                        onChange={(event) =>
                            onPlataformaChange(event.target.value)
                        }>
                        <option value="">
                            Todas las plataformas
                        </option>

                        <option value="PC">
                            PC
                        </option>

                        <option value="PS5">
                            PS5
                        </option>
                    </select>
                </div>

                <button type="button"
                    className="btn-limpiar-filtros-react"
                    onClick={onLimpiar}>
                    Limpiar filtros
                </button>
            </form>
        )
    }

    if (catalogo === 'accesorios') {
        return (
            <div className="filtros-react">
                <div className="filtro-react">
                    <label htmlFor="categoria-react">
                        Categoría
                    </label>

                    <select
                        id="categoria-react"
                        value={categoria}
                        onChange={(event) =>
                            onCategoriaChange(event.target.value)
                        }>
                        <option value="">
                            Todas las categorías
                        </option>

                        <option value="mouse">
                            Mouse
                        </option>

                        <option value="teclados">
                            Teclados
                        </option>

                        <option value="audifonos">
                            Audífonos
                        </option>
                    </select>
                </div>

                <button
                    type="button"
                    className="btn-limpiar-filtros-react"
                    onClick={onLimpiar}>
                    Limpiar filtros
                </button>
            </div>
        )
    }

    return null
}

export default Filtros