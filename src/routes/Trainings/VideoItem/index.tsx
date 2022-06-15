import { Link } from 'react-router-dom'
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
      return video
    })
  }

  return (
    <li className={styles.videoItemWrapper}>
      <Link to='/detail/videoDetail' onClick={handleClickVideo} className={styles.videoItem}>
        <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt='video thumbnail' />
        <div className={styles.metaData}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </Link>
    </li>
  )
}

export default VideoItem
