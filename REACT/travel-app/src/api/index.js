import axios from 'axios';

export const getPlaces = async (sw, ne) => {

    const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

    try {
        const {data: {data}} = await axios.get(URL, {
            params: 
            {
                bl_latitude: '11.847676',
                tr_latitude: '12.838442',
                bl_longitude: '109.095887',
                tr_longitude: '109.149359',
            },
            headers: 
            {
                'X-RapidAPI-Key': '7db814c633msha6ee3374f352f25p177df2jsn0dd5462c58a8',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

 