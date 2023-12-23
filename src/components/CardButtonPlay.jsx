import { usePlayerStore } from '@/store/playerStore'
import { Pause , Play } from './Player'

const CardButtonPlay = ({ id }) => {

  const { 
    isPlaying , 
    setIsPlaying,
    currentMusic,
    setCurrentMusic
  } = usePlayerStore( state => state )

  const handlePlay = () => {

    setCurrentMusic({
      playlist: {
        id
      }
    })

    setIsPlaying(!isPlaying)

  }

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id

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