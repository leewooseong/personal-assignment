import { atom } from 'recoil'
import { IVideoItem } from 'types/video'

export const videoListState = atom<IVideoItem[]>({
  key: '#movieListState',
  default: [],
})

export const pageNumberState = atom<number>({
  key: '#pageNumberState',
  default: 1,
})

export const selectedVideo = atom<IVideoItem>({
  key: '#selectedVideo',
  default: {} as IVideoItem,
})
