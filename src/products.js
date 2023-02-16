const productsArray = [
    {
        id: "1",
        item: "Coffee",
        price: 4.99
    },
    {
        id: "2",
        item: "Sunglasses",
        price: 9.99
    },
    {
        id: "3",
        item: "Camera",
        price: 39.99
    }
]

const getProductData = (id) => {
    let product = productsArray.find(product => product.id === id)

    if(product === undefined) {
        console.log("No product with ID ", id)
    }

    return product
}

export { productsArray, getProductData }