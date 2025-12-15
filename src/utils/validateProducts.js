export const validateProducts = (product, fileRequired = true) =>{
    const errors = {}
    if (!product.name.trim()) {
        errors.name = "El nombre debe tener al menos una letra"
    }
    if (!product.price || product.price <= 0) {
        errors.price = "El precio debe tener un valor mayor a cero ( 0 )"
    }
    return errors
}