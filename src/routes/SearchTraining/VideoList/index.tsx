import styles from './videoList.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { getYoutubeSearchApi } from 'services/youtube-axios'
import { IVideoItem } from 'types/video'

const NO_RESULT = '검색 결과가 없습니다.'

const VideoList = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [videoList, setVideoList] = useState<IVideoItem[]>([])

  const getVideoList = useCallback(async () => {
    // const response = await getYoutubeSearchApi({ query: 'mix9' })
    // setVideoList(response.data.items)
    // console.log(response)
  }, [])

  useEffect(() => {
    getVideoList()
  }, [])

  return (
    <ul>
      {/* {videoList.map((video, index) => (
        <li key={video.id}>{!video.snippet.title && `동영상${index}`}</li>
      ))} */}
    </ul>
  )
}

export default VideoList
