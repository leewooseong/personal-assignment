import { atom } from 'recoil'
import { IVideoList } from 'types/video'

export const videoListState = atom<IVideoList[]>({
  key: '#movieListState',
  default: [],
})

export const pageNumberState = atom<number>({
  key: '#pageNumberState',
  default: 1,
})
