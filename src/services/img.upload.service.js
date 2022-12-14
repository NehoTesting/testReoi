import axios from 'axios';

export const uploadImg = async (ev) => {
    const UPLOAD_PRESET = 'ml_default'
    const CLOUD_NAME = 'dksmeovlj'
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const FORM_DATA = new FormData();
    FORM_DATA.append('file', ev.target.files[0])
    FORM_DATA.append('upload_preset', UPLOAD_PRESET)
    try {
        const res = await axios.post(UPLOAD_URL, FORM_DATA)
        return res.data;
    } catch (err) {
        console.error('ERROR!', err)
    }
}
