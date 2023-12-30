import { usePlayerStore } from '@/store/playerStore'
import { Pause , Play } from './Player'

const CardButtonPlay = ({ id, size = 'small' }) => {

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

    debugger
    
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

  const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5'
  const iconClass = size === 'small' ? 'w-[20px] h-[20px]' : 'w-[60px] h-[60px]'

  return (
    <div onClick={handlePlay} className={`card-play-button grid place-content-center rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400 ${iconClass}`}>
      {
        isPlayingPlaylist
        ?
        <Pause className={iconClassName}/>
        :
        <Play className={iconClassName}/>
      }
    </div>
  )
}

export default CardButtonPlay