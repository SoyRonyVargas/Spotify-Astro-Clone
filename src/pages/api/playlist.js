import { allPlaylists , songs } from "@/lib/data";

export async function GET({ params , request }){

    const { url } = request

    const [ , queryString ] = url.split("?")

    const searchParams = new URLSearchParams(queryString)

    const id = searchParams.get("id")

    const playlistSearched = allPlaylists.find( p => p.id === id )

    if( !playlistSearched ) return
    
    const songsFiltered = songs.filter( s => s.albumId === playlistSearched.albumId )

    return new Response(JSON.stringify({
        playlist: playlistSearched,
        songs: songsFiltered
    }), {
        headers: {
            "content-type": "application/json"
        }
    })

}