const getImages = () => {
    return fetch("https://jsonplaceholder.typicode.com/photos")
}

export { getImages };