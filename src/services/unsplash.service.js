const axios = require('axios');

export const unsplashService = {
    getImages
}

async function getImages(term) {
    const apiKey = 'Kj-Uiky3eiYJUQrQVKqK6qF2lnapUd2bBQfg7rTVHD8'
    const res = await axios.get(`https://api.unsplash.com/search/photos?per_page=15&query=${term}&client_id=${apiKey}`)
    try {
        return res.data.results
    } catch {
        console.log('error');
    }
}