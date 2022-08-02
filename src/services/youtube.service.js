import axios from 'axios';


export const youtubeService = {
    getVids
}

async function getVids(searchTerm) {
    var res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyDUV8Bo2XWjps_p1U8b9lsVXK9wJ0MRlcg&q=${searchTerm}`)
    try {
        res = res.data.items.map(vid => {
            return {
                videoId: vid.id.videoId,
                thumbnail: vid.snippet.thumbnails.medium,
                title: vid.snippet.title,
                description: vid.snippet.description
            }
        })
        return res;
    } catch {
        console.log('error while getting from youtube videos');
    }
}