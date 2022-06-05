import { axios } from 'hooks/worker'
import { IYoutubeAPIRes } from 'types/video.d'

const YOUTUBE_BASE_URL = 'https://youtube.googleapis.com/youtube/v3'

interface Params {
  query: string
}

export const getYoutubeSearchApi = (params: Params) => {
  return axios.get<IYoutubeAPIRes>(`${YOUTUBE_BASE_URL}/search`, {
    params: {
      part: 'snippet',
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
      maxResults: 8,
      q: params.query,
      type: 'video',
    },
  })
}
