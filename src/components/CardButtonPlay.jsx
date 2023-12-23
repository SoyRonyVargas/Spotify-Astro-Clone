import { usePlayerStore } from '@/store/playerStore'
import { Pause , Play } from './Player'

const CardButtonPlay = ({ id }) => {

  const { 
    isPlaying , 
    setIsPlaying,
    currentMusic,
    setCurrentMusic
  } = usePlayerStore( state => state )
  
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id

  const handlePlay = async () => {

    if( isPlayingPlaylist )
    {

      setIsPlaying(false)

      return

    }

    const data = await (await (fetch(`/api/playlist?id=${id}`))).json()

    const {
      songs,
      playlist
    } = data
    
    setIsPlaying(true)

    setCurrentMusic({
      songs,
      playlist,
      song: songs[0]
    })

    // setIsPlaying(!isPlaying)

  }

 

  return (
    <div onClick={handlePlay} className='rounded-full p-4 bg-green-500'>
      {
        isPlayingPlaylist
        ?
        <Pause/>
        :
        <Play/>
      }
    </div>
  )
}

export default CardButtonPlay