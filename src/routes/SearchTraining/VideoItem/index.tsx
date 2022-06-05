import { useSetRecoilState } from 'recoil'
import { selectedVideo } from '../../../states/video'
import { IVideoItem } from 'types/video'
import styles from './videoItem.module.scss'

interface IProps {
  video: IVideoItem
}

const VideoItem = ({ video, video: { snippet } }: IProps) => {
  const setSelectedVideo = useSetRecoilState(selectedVideo)
  const handleClickVideo = () => {
    setSelectedVideo((pre) => {
      console.log(video)
      return video
    })
  }
  console.log(snippet.title)

  return (
    <li className={styles.videoItemWrapper}>
      <button className={styles.videoItem} type='button' onClick={handleClickVideo}>
        <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt='video thumbnail' />
        <div className={styles.metaData}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </button>
    </li>
  )
}

export default VideoItem
