import { allPlaylists } from "@/lib/data";


export async function GET({ params , request }){

    const { url } = request

    const [ , queryString ] = url.split("?")

    const searchParams = new URLSearchParams(queryString)

    searchParams.get("id")

    return 

}