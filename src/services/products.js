const BASE_URL = "https://6913fa20f34a2ff1170db941.mockapi.io/clubes"

export const createProduct = async(product) =>{
    const res = await fetch(BASE_URL,{
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(product)
    })
    if (!res.ok) {
        throw new Error("No se puede crear el producto")
    }
    const result = await res.json()
    return result
}