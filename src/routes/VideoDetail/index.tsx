import { useRecoilValue } from 'recoil'
import { selectedVideo } from 'states/video'
import styles from './videoDetail.module.scss'

const VideoDetail = () => {
  const video = useRecoilValue(selectedVideo)
  console.log(video)

  return (
    <section>
      <iframe
        className={styles.video}
        data-type='text/html'
        title='youtube video player'
        width='100%'
        height='500px'
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameBorder='0'
        allowFullScreen
      />
      <div className={styles.detail}>
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.channelTitle}</h3>
        <pre className={styles.description}>{video.snippet.description}</pre>
      </div>
    </section>
  )
}

export default VideoDetail
