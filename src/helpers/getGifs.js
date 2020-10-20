// Esta funcion retorna una Promesa
export const getGifs = async( category ) => {
    // encodeURI reempplaza los espacios, etc %20, etc
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=EyZ0xkJsyeIeY1rAlEagVprm5ekHuqVo`;
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