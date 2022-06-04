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
