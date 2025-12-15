export const ProductFormUI = ({ product, errors, loading, onChange, onFileChange, onSubmit }) => {
    return (
        <section>
            <form onSubmit={onSubmit}></form>
            <h2>Agregar Club</h2>
            <div>
                <label>Nombre: </label>
                <input type="text" name="name" value={product.name} onChange={onChange} required />
            </div>
            <div>
                <label>Pais: </label>
                <input type="text" name="pais" value={product.pais} onChange={onChange} required />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? "Guardando..." : "Guardar"}
            </button>
        </section>
    )
}