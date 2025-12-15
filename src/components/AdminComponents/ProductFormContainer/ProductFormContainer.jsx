import { useState } from "react"
import { validateProducts } from "../../../utils/validateProducts"
import { uploadToImgbb } from "../../../services/updateImage"
import { createProduct } from "../../../services/products"

export const ProductFormContainer = () => {
    const [loading, setLoading] = useState()
    const [file, setFile] = useState(null)
    const [errors, setErrors] = useState(null)
    const [product, setProduct] = useState({
        name: "",
        pais: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setProduct({ ...product, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors({})
        setLoading(true)
        const newErrors = validateProducts({ ...product, file })
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            setLoading(false)
            return
        }
        try {
            const imageUrl = await uploadToImgbb()
            const productData = { ...product, pais: Number(product.pais), imageUrl }
            await createProduct(productData)
            alert("producto cargado con exito")
            setProduct({ name: "", pais: "" })
            setFile(null)
        }
        catch (error) {
            setErrors({ general: error.message })
        }
        finally {
            setLoading(false)
        }
    }
    return <ProductFormContainer product={product} errors={errors} onChange={handleChange} onFileChange={setFile} loading={loading} onSubmit={handleSubmit} />
}