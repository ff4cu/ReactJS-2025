export const dataProvider = (pais) => {
    let db = []
    fetch("https://6913fa20f34a2ff1170db941.mockapi.io/clubes")
        .then(response =>
            response.json())
        .then(data =>
            data.filter((c) => c.pais == pais ? db.push(c) : "")
        )
    return db
}