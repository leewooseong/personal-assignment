import styles from './videoList.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { getYoutubeSearchApi } from 'services/youtube-axios'
import { IVideoItem } from 'types/video'
import { useSearchParams } from 'react-router-dom'
import VideoItem from '../VideoItem'

const NO_RESULT = '검색 결과가 없습니다.'

const VideoList = () => {
  //   const [isLoading, setIsLoading] = useState(false)
  const [videoList, setVideoList] = useState<IVideoItem[]>([])

  const [searchParams] = useSearchParams()
  const currentSearch = searchParams.get('s')

  const getVideoList = useCallback(async () => {
    if (currentSearch === null) {
      return
    }
    const response = await getYoutubeSearchApi({ query: currentSearch })
    setVideoList(response.data.items)
    console.log(response)
  }, [currentSearch])

  useEffect(() => {
    getVideoList()
  }, [currentSearch])

  return (
    <ul className={styles.videoList}>
      {videoList.map((video) => (
        <VideoItem key={video.id.videoId} video={video} />
      ))}
    </ul>
  )
}

export default VideoList
