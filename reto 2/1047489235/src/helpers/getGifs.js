


export const getGifs = async( category ) => {

    const api_key = 'PF8N8GBFXuuSz0crHY776J7ThllG75al';
    const typeSearch = 'gifs'; //stickers
    const limit = 10;
    const url = `https://api.giphy.com/v1/${typeSearch}/search?q=${ encodeURI( category ) }&limit=${limit}&api_key=${api_key}`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;


}