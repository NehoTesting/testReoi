import axios from 'axios';


export const mapService = {
    getAddress
}

async function getAddress(term){
    const apiKey = 'AIzaSyCkBmq94RUL-VNdku46pXE3nt-_Z01Damo'
    const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${term}&key=${apiKey}`)
    try {
        const { geometry, formatted_address } = res.data.results[0]
        const location = {
            lat: geometry.location.lat,
            lng: geometry.location.lng,
            address: formatted_address
        }
        return location
    } catch {
        console.log('error');
    }
    
}
