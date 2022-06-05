import styles from './videoList.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { getYoutubeSearchApi } from 'services/youtube-axios'
import { IVideoItem } from 'types/video'
import VideoItem from '../VideoItem'
import { useSearchParams } from 'react-router-dom'

const NO_RESULT = '검색 결과가 없습니다.'

const VideoList = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [videoList, setVideoList] = useState<IVideoItem[]>([])

  const [searchParams] = useSearchParams()
  const currentSearch = searchParams.get('s')

  const getVideoList = useCallback(async () => {
    if (currentSearch === null) {
      return
    }
    console.log(currentSearch)
    const response = await getYoutubeSearchApi({ query: currentSearch })
    setVideoList(response.data.items)
    console.log(response)
  }, [currentSearch])

  useEffect(() => {
    console.log(currentSearch)
    getVideoList()
  }, [currentSearch])

  return (
    <ul className={styles.videoList}>
      {videoList.map((video, index) => (
        <VideoItem key={video.id.videoId} video={video} />
      ))}
    </ul>
  )
}

export default VideoList
